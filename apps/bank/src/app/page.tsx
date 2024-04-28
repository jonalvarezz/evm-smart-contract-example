'use client';

import { createWalletClient, createPublicClient, custom, http } from 'viem';
import { sepolia } from 'viem/chains';

import { bank } from '@evm-smart-contract-example/contract';

export default function Index() {
  function onConnect() {
    async function processAsync() {
      const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(),
      });

      const client = createWalletClient({
        chain: sepolia,
        transport: custom(window.ethereum!),
      });

      const [address] = await client.requestAddresses();
      console.log({ address });

      const balance = await publicClient.readContract({
        ...bank,
        functionName: 'getBalance',
        args: [address],
      });

      console.log({ balance });

      const { request } = await publicClient.simulateContract({
        ...bank,
        account: address,
        functionName: 'deposit',
        args: [BigInt(10)],
      });
      const hash = await client.writeContract(request);
      console.log({ hash });

      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log({ receipt });
    }

    processAsync();
  }

  function onDeposit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('deposit');
  }

  return (
    <div>
      <aside className="p-4 border rounded my-4">
        <h2>Account</h2>
        <dl>
          <dt className="inline font-semibold text-gray-900">Address</dt>
          <dd>0x1234567890abcdef</dd>
          <dt className="inline font-semibold text-gray-900">Chain</dt>
          <dd>ETH</dd>
          <dt className="inline font-semibold text-gray-900">Balance</dt>
          <dd>1000</dd>
        </dl>
        <div className="my-2">
          <button
            onClick={onConnect}
            className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Connect
          </button>
        </div>
      </aside>
      <section className="p-4 border rounded my-4">
        <h2>Bank</h2>
        <dl>
          <dt className="inline font-semibold text-gray-900">Balance</dt>
          <dd>1000</dd>
        </dl>
        <form onSubmit={onDeposit}>
          <div className="my-2">
            <div className="flex items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount
              </label>
              <div className="text-sm ml-4">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  ?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                name="amount"
                type="number"
                required
                className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="my-2">
            <button
              type="submit"
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Deposit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
