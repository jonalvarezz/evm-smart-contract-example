'use client';

import {
  Alert,
  AlertIcon,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import { bank } from '@app/contract';
import { useWallet } from '../store/useWallet';
import { Deposit } from '../components/deposit/deposit';

export default function Index() {
  const { data } = useWallet();

  function onConnect(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    async function processAsync() {
      if (!data) {
        return;
      }

      const { walletClient, publicClient } = data;

      const [address] = await walletClient.requestAddresses();
      console.log({ address });

      const balance = await publicClient.readContract({
        ...bank,
        functionName: 'getBalance',
        args: [address],
      });

      console.log({ balance });
    }

    processAsync();
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="w-11/12 max-w-2xl mt-10" variant="elevated" size="md">
        <CardHeader>
          <HStack as="h2" justifyContent="space-between">
            <Heading as="div" size="lg">
              Your Balance
            </Heading>
            <Heading as="div" size="lg">
              <span className="text-emerald-600">1000</span> <span>TTK</span>
            </Heading>
          </HStack>
        </CardHeader>
        <CardBody>
          <Text>Manage your account with Bank3 App.</Text>
          {data == null ? (
            <EmptyState className="mt-8" />
          ) : (
            <Tabs className="mt-8">
              <TabList>
                <Tab>Deposit</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Deposit />
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

function EmptyState({ className }: { className?: string }) {
  return (
    <Alert status="info" className={className}>
      <AlertIcon />
      Connect your wallet to get started.
    </Alert>
  );
}
