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

import { useWallet } from '../store/useWallet';
import { useBankBalance } from '../store/useBankBalance';

import { Deposit } from '../components/deposit/deposit';
import { TokenSymbol } from '../components/token-symbol';

export default function Index() {
  const { data: wallet } = useWallet();
  const { data: balance } = useBankBalance();

  return (
    <div className="flex items-center justify-center">
      <Card className="w-11/12 max-w-2xl mt-10" variant="elevated" size="md">
        <CardHeader>
          <HStack as="h2" justifyContent="space-between">
            <Heading as="div" size="lg">
              Your Balance
            </Heading>
            <Heading as="div" size="lg">
              <span className="text-emerald-600">{balance.toString()}</span>{' '}
              <TokenSymbol />
            </Heading>
          </HStack>
        </CardHeader>
        <CardBody>
          <Text>Manage your account with Bank3 App.</Text>
          {wallet == null ? (
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
