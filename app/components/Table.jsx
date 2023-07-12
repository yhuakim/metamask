"use client"

const Table = () => {
    return (
        <div className="">
            <table className="w-full max-h-72 text-left text-xs">
                <thead className="text-xs text-gray-400 border-b border-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Token
                        </th>
                        <th scope="col" className="px-6 py-3 flex space-x-2">
                            <span className="">
                                Portfolio %
                            </span>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Balance
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="border-b border-gray-700 w-full">
                        <th scope="row" className="px-6 py-2 font-medium flex flex-col w-48">
                            <b className="uppercase">code</b>
                            <small className="text-gray-400">Developer DAO</small>
                        </th>
                        <td className="px-6 py-2 w-48">
                            49%
                        </td>
                        <td className="px-6 py-2 w-48">
                            <p className="">$0.12</p>
                            <small className="text-red-500">$0.00 (0.00%)</small>
                        </td>
                        <td className="px-6 py-2 w-48">
                            <p className="">$46.47</p>
                            <small className="text-gray-400">400 CODE</small>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                        <th scope="row" className="px-6 py-2 font-medium flex flex-col">
                            <b className="uppercase">weth</b>
                            <small className="text-gray-400">Wrapped Ether</small>
                        </th>
                        <td className="px-6 py-2">
                            39.12%
                        </td>
                        <td className="px-6 py-2">
                            <p className="">$1,864.48</p>
                            <small className="text-green-500">+$3.51 (+0.19%)</small>
                        </td>
                        <td className="px-6 py-2 ">
                            <p className="">$37.10</p>
                            <small className="text-gray-400">0.0199 WETH</small>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                        <th scope="row" className="px-6 py-2 font-medium flex flex-col">
                            <b className="uppercase">eth</b>
                            <small className="text-gray-400">Ethereum</small>
                            <span className="">
                                {/* stake Icon */}
                            </span>
                        </th>
                        <td className="px-6 py-2">
                            11.35%
                        </td>
                        <td className="px-6 py-2">
                            <p className="">$1,860.90</p>
                            <small className="text-red-500">-$14.22 (-0.76%)</small>
                        </td>
                        <td className="px-6 py-2">
                            <p className="">$10.77</p>
                            <small className="text-gray-400">0.0058 ETH</small>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                        <th scope="row" className="px-6 py-2 font-medium flex flex-col">
                            <b className="uppercase">bnb</b>
                            <small className="text-gray-400">Binance Coin</small>
                        </th>
                        <td className="px-6 py-2">
                            0.5%
                        </td>
                        <td className="px-6 py-2">
                            <p className="">$241.62</p>
                            <small className="text-green-500">+$6.28 (+2.67%)</small>
                        </td>
                        <td className="px-6 py-2">
                            <p className="">$0.47</p>
                            <small className="text-gray-400">0.002 BNB</small>
                        </td>
                    </tr>
                    <tr className="">
                        <th scope="row" className="px-6 py-2 font-medium flex flex-col">
                            <b className="uppercase">matic</b>
                            <small className="text-gray-400">MATIC</small>
                        </th>
                        <td className="px-6 py-2">
                            0.03%
                        </td>
                        <td className="px-6 py-2">
                            <p className="">$0.71</p>
                            <small className="text-green-500">+$0.02 (+2.18%)</small>
                        </td>
                        <td className="px-6 py-2">
                            <p className="">$0.03</p>
                            <small className="text-gray-400">0.0371 MATIC</small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table