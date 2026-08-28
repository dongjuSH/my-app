'use client';

import { Store, ShoppingBag, SquarePercent, User, CalendarDays, CreditCard, Mail, ChevronRight } from 'lucide-react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// 테이블 데이터
const transactionData = [
  {
    orderId: 'AR-47380416-61', // 주문번호
    product: 'Meta Quest 3', // 제품명
    description: '512Gb · White', // 제품 설명
    productImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=80&h=80&fit=crop', // 제품 이미지
    price: 499, // 가격
    customer: 'Liam Smith', // 구매자
    customerImage: 'https://i.pravatar.cc/40?img=11', // 구매자 이미지
    date: '02 Apr 2025, 8:15 am', // 구매일
    payment: '•••• 4321', // 카드 번호
    paymentType: 'Visa', // 카드사
    paymentImage: 'https://cdn.simpleicons.org/visa', // 카드사 이미지
    email: 'smith@example.com' // 이메일
  },
  {
    orderId: 'AR-30631995-17',
    product: 'iPhone 15 Pro Max',
    description: '512Gb · eSIM',
    productImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=80&h=80&fit=crop',
    price: 1399,
    customer: 'Lily Thompson',
    customerImage: 'https://i.pravatar.cc/40?img=47',
    date: '06 Apr 2025, 6:45 pm',
    payment: '•••• 8890',
    paymentType: 'Mastercard',
    paymentImage: 'https://cdn.simpleicons.org/mastercard',
    email: 'thom@example.com'
  },
  {
    orderId: 'AR-79609316-32',
    product: 'MacBook Air M3 (13”)',
    description: 'M3 chip · Ultra-light',
    productImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=80&h=80&fit=crop',
    price: 1299,
    customer: 'Lucas Young',
    customerImage: 'https://i.pravatar.cc/40?img=12',
    date: '10 Apr 2025, 11:30 am',
    payment: '•••• 1023',
    paymentType: 'Visa',
    paymentImage: 'https://cdn.simpleicons.org/visa',
    email: 'young@example.com'
  },
  {
    orderId: 'AR-17288760-13',
    product: 'AirPods Pro',
    description: '2nd Gen · USB-C case',
    productImage: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=80&h=80&fit=crop',
    price: 229,
    customer: 'Isabella Garcia',
    customerImage: 'https://i.pravatar.cc/40?img=44',
    date: '14 Apr 2025, 7:50 pm',
    payment: '•••• 5678',
    paymentType: 'Visa',
    paymentImage: 'https://cdn.simpleicons.org/visa',
    email: 'garcia@example.com'
  },
  {
    orderId: 'AR-24593385-96',
    product: 'Apple Vision Pro',
    description: 'AR Headset',
    productImage: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=80&h=80&fit=crop',
    price: 3499,
    customer: 'Amelia Davis',
    customerImage: 'https://i.pravatar.cc/40?img=32',
    date: '18 Apr 2025, 9:05 am',
    payment: '•••• 3301',
    paymentType: 'Mastercard',
    paymentImage: 'https://cdn.simpleicons.org/mastercard',
    email: 'davis@example.com'
  },
  {
    orderId: 'AR-57722590-75',
    product: 'Oura Ring 4',
    description: 'Health Wearable',
    productImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop',
    price: 399,
    customer: 'Caleb Turner',
    customerImage: 'https://i.pravatar.cc/40?img=13',
    date: '22 Apr 2025, 10:10 pm',
    payment: '•••• 9823',
    paymentType: 'Stripe',
    paymentImage: 'https://cdn.simpleicons.org/stripe',
    email: 'turner@example.com'
  }
];

export default function RecentTransactions() {
  return (
    <section className="w-full mt-4 bg-[#101211] border border-[#282b2a] rounded-xl">
      {/* 테이블 상단 */}
      <div className="p-4 flex items-center">
        <span className="text-white text-lg">
          Recent Transaction
        </span>
        <span className="ml-2 px-1.5 py-0.5 bg-[#282b2a] text-muted-foreground text-xs rounded-sm">
          {transactionData.length}
        </span>
      </div>

      <div className="px-4 pb-4">
        {/* 테이블 */}
        <Table>
          {/* 헤더 */}
          <TableHeader>
            <TableRow className="border-[#282b2a] hover:bg-transparent">
              <TableHead className="text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <Store className="size-4" />
                  <span>ORDER ID</span>
                </div>
              </TableHead>

              <TableHead className="text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="size-4" />
                  <span>PRODUCT ITEM</span>
                </div>
              </TableHead>

              <TableHead className="text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <SquarePercent className="size-4" />
                  <span>PRICE</span>
                </div>
              </TableHead>

              <TableHead className="text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <User className="size-4" />
                  <span>CUSTOMER</span>
                </div>
              </TableHead>

              <TableHead className="text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4" />
                  <span>DATE CHECKOUT</span>
                </div>
              </TableHead>

              <TableHead className="text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <CreditCard className="size-4" />
                  <span>PAYMENT METHOD</span>
                </div>
              </TableHead>

              <TableHead className="text-muted-foreground text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <span>EMAIL</span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactionData.map((item) => (
              <TableRow
                key={item.orderId}
                className="border-[#282b2a] hover:bg-[#171918]"
              >
                {/* 주문 번호 */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="size-7 bg-[#171918] border border-[#282b2a] rounded-md text-muted-foreground hover:bg-[#282b2a] hover:text-white">
                      <ChevronRight className="size-4" />
                    </Button>
                    <span className="text-white text-sm">
                      {item.orderId}
                    </span>
                  </div>
                </TableCell>

                {/* 상품 */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img src={item.productImage} alt={item.product} className="size-10 object-cover rounded-md" />
                    <div>
                      <p className="text-white text-sm">
                        {item.product}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* 가격 */}
                <TableCell className="text-white text-sm font-medium">
                  ${item.price.toLocaleString()}
                  <span className="text-muted-foreground">.00</span>
                </TableCell>

                {/* 고객 */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img src={item.customerImage} alt={item.customer} className="size-8 object-cover rounded-full" />
                    <span className="text-white text-sm">
                      {item.customer}
                    </span>
                  </div>
                </TableCell>

                {/* 결제 날짜 */}
                <TableCell className="text-muted-foreground text-sm">
                  {item.date}
                </TableCell>

                {/* 결제 수단 */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-7 bg-white rounded-md flex items-center justify-center">
                      <img src={item.paymentImage} alt={item.paymentType} className="w-7 h-4 object-contain" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {item.payment}
                    </span>
                  </div>
                </TableCell>

                {/* 이메일 */}
                <TableCell className="text-white text-sm">
                  {item.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}