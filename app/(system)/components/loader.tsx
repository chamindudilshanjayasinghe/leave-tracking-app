export default function Loader() {
    return (
        <div className="bg-white h-screen w-screen flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
                <p className="text-green-600 font-medium text-lg animate-pulse tracking-wider">
                    Loading...
                </p>
            </div>
        </div>
    );
}