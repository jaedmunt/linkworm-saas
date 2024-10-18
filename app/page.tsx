import { ChakraProvider, Box, Heading, Text } from '@chakra-ui/react';
import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading as="h1" size="xl" mb={4}>
          Pricing Page
        </Heading>
        <Pricing
          user={user}
          products={products ?? []}
          subscription={subscription}
        />
      </Box>
    </ChakraProvider>
  );
}
