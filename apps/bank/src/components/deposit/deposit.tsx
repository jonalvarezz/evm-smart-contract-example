import { bank } from '@app/contract';
import { useWallet } from '../../store/useWallet';
import { DepositForm as Form } from './deposit-form';

export function Deposit() {
  const { data, status } = useWallet();

  if (status !== 'success' || !data) {
    throw new Error('Expected Wallet to be connected.');
  }

  const { publicClient, walletClient, address } = data;

  const onDeposit = async (amount: number) => {
    const { request } = await publicClient.simulateContract({
      ...bank,
      account: address,
      functionName: 'deposit',
      args: [BigInt(10)],
    });
    const hash = await walletClient.writeContract(request);
    console.log({ hash });

    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log({ receipt });
  };

  return <Form onDeposit={onDeposit} />;
}
