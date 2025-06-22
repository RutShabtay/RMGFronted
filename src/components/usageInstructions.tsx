export const UsageInstructions = ({ close }: { close: (value: boolean) => void }) => {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 border border-gray-200 relative">

                <h2 className="text-xl text-gray-800 mb-6 text-center tracking-wide">
                    HOW TO USE THE LIBRARY
                </h2>

                <ol className="list-decimal list-inside space-y-5 text-sm text-gray-700">
                    <h1>To start using the <span className="font-bold">rmg-components-lib</span>, follow this steps:</h1>
                    <li>
                        <span className="font-medium">Install the package via NPM:</span>
                        <pre className="mt-2 bg-gray-900 text-green-300 px-4 py-3 rounded-md text-sm font-mono overflow-auto">
                            npm install rmg-components-lib
                        </pre>
                    </li>
                    <li>
                        <span className="font-medium">Import the components you need:</span>
                        <pre className="mt-2 bg-gray-900 text-green-300 px-4 py-3 rounded-md text-sm font-mono overflow-auto">
                            {`import {
  RMGButton,
  RMGHeader,
  RMGText
} from 'rmg-components-lib';`}
                        </pre>
                    </li>
                    <li>
                        <span className="font-medium">Use them in your app as usual 🎉</span>
                    </li>
                </ol>

                <div className="mt-8 text-center">
                    <a
                        href="https://www.npmjs.com/package/rmg-components-lib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                    >
                        View on NPM →
                    </a>
                </div>
            </div>
            <button onClick={() => close(false)} className="absolute top-43 left-155 text-black-500 hover:text-black-700 font-semibold">
                X
            </button>
        </div>
    );
}