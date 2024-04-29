'use client';

import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';

type Props = {
  onDeposit?: (amount: number) => void;
};

export function DepositForm({ onDeposit }: Props) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onDeposit) {
      const amount = parseFloat((event.target as any).amount.value);
      onDeposit(amount);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <NumberInput max={1000} min={10} name="amount">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={false} type="submit">
        Deposit
      </Button>
    </form>
  );
}
