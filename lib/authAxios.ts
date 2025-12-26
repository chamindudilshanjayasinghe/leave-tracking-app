"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import apiClient from "./apiClient";

const authAxios = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const requestIntercept = apiClient.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${session?.user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = apiClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.clear();
          signOut({ redirect: false });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      apiClient.interceptors.request.eject(requestIntercept);
      apiClient.interceptors.response.eject(responseIntercept);
    };
  }, [session, router]);

  return apiClient;
};

export default authAxios;

