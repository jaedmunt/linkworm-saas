import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';

import Image from 'next/image';
import React from 'react';


import { Reader } from '@/components/ui/pdf-viewer';
 

export default function PdfViewerPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <h1 className="text-6xl font-bold">PDF Viewer</h1>

       <Reader fileURL="/public/test_pdfs/moles.pdf" />

      </div>
    );
}




  
//export default async function PricingPage() {
//  const supabase = createClient();
//  const [user, products, subscription] = await Promise.all([
//    getUser(supabase),
//    getProducts(supabase),
//    getSubscription(supabase)
//  ]);
//
//  return (
//    <Pricing
//      user={user}
//      products={products ?? []}
//      subscription={subscription}
//    />
//  );
//}

  