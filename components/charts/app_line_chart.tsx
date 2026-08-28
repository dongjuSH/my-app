'use client';

import { Wallet, WalletMinimal, DollarSign, FileChartColumnIncreasing, MoveUp, MoveDown, Maximize2 } from 'lucide-react';
import { Line, LineChart } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';

// 카드 데이터
const productData = [
  {
    title: 'Nominal Balance', // 라벨
    value: '7,500.00', // 가격
    unit: 'USD', // 단위
    change: '1.19%', // 증감률
    icon: Wallet, // 라벨 아이콘
    iconBg: '#321522', // 라벨 아이콘 배경 색상
    iconColor: '#e23a8a', // 라벨 아이콘 색상
    chartColor: '#28c780', // 차트 색상
    rateIcon: MoveUp, // 증감률 아이콘
    rateIconBg: "#14231a", // 증감률 아이콘 배경 색상
    chartData: [ // 차트 굴곡
      { value: 42 },
      { value: 18 },
      { value: 63 },
      { value: 25 },
      { value: 82 },
      { value: 35 },
      { value: 70 },
      { value: 28 },
      { value: 88 },
      { value: 52 },
      { value: 95 },
    ],
  },
  {
    title: 'Total Stock Product',
    value: '3.142',
    unit: 'ITEMS',
    change: '0.29%',
    icon: WalletMinimal,
    iconBg: '#12313a',
    iconColor: '#38bdf8',
    chartColor: '#28c780',
    rateIcon: MoveUp,
    rateIconBg: "#14231a",
    chartData: [
      { value: 30 },
      { value: 48 },
      { value: 35 },
      { value: 62 },
      { value: 55 },
      { value: 76 },
      { value: 68 },
      { value: 85 },
      { value: 72 },
      { value: 90 },
      { value: 82 },
    ],
  },
  {
    title: 'Nominal Revenue',
    value: '21,430.00',
    unit: 'USD',
    change: '0.29%',
    icon: DollarSign,
    iconBg: '#172554',
    iconColor: '#3b82f6',
    chartColor: '#28c780',
    rateIcon: MoveUp,
    rateIconBg: "#14231a",
    chartData: [
      { value: 55 },
      { value: 40 },
      { value: 65 },
      { value: 58 },
      { value: 75 },
      { value: 50 },
      { value: 80 },
      { value: 68 },
      { value: 92 },
      { value: 78 },
      { value: 88 },
    ],
  },
  {
    title: 'Nominal Expense',
    value: '12,980.00',
    unit: 'USD',
    change: '0.15%',
    icon: FileChartColumnIncreasing,
    iconBg: '#2e1065',
    iconColor: '#8b5cf6',
    chartColor: '#ef4444',
    rateIcon: MoveDown,
    rateIconBg: "#37151d",
    chartData: [
      { value: 85 },
      { value: 70 },
      { value: 78 },
      { value: 58 },
      { value: 65 },
      { value: 45 },
      { value: 55 },
      { value: 38 },
      { value: 48 },
      { value: 30 },
      { value: 42 },
    ],
  },
];

// 차트 설정
const chartConfig = {
  value: {
    label: 'Product',
    color: '#28c780',
  }
} satisfies ChartConfig;

export default function AppLineChart() {
  return (
    <>
      {/* 카드 반복 출력 */}
      {productData.map((item) => {
        // 루시드 라벨 아이콘
        const Icon = item.icon;
        // 루시드 증감률 아이콘
        const RateIcon = item.rateIcon;

        return (
          <Card key={item.title} className="w-full py-3 bg-[#101211] border-[#282b2a] text-white gap-1">
            {/* 카드 상단 */}
            <CardHeader className="px-4">
              <div className="flex items-center gap-2">
                {/* 아이콘 */}
                <div className="size-8 rounded-full flex items-center justify-center" style={{ backgroundColor: item.iconBg }}>
                  <Icon className="size-4" style={{ color: item.iconColor }} />
                </div>
                {/* 제목 */}
                <p className="text-white text-lg">
                  {item.title}
                </p>
                {/* 확대 버튼 */}
                <Button variant="ghost" size="icon" className="size-7 ml-auto text-muted-foreground hover:bg-transparent hover:text-muted-foreground group/button">
                  <Maximize2 className="size-4 transition-transform duration-200 group-hover/button:scale-120" />
                </Button>
              </div>
            </CardHeader>

            {/* 카드 내용 */}
            <CardContent className="pt-4 px- flex gap-4">
              {/* 가격, 증감률 */}
              <div className="min-w-0 flex-1">
                {/* 가격 */}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold">
                    {item.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.unit}
                  </span>
                </div>
                {/* 증감률 */}
                <div className="mt-2 text-sm flex items-center gap-1" style={{ color: item.chartColor }}>
                  <div className="size-8 rounded-full flex items-center justify-center" style={{ backgroundColor: item.rateIconBg }} >
                    <RateIcon className="size-4" style={{ color: item.chartColor }} />
                  </div>
                  <span>
                    {item.change}
                  </span>
                </div>
              </div>

              {/* 차트 */}
              <ChartContainer config={chartConfig} className="w-[45%] h-20 shrink-0">
                {/* 차트 데이터 불러오기 */}
                <LineChart
                  accessibilityLayer
                  data={item.chartData}
                  margin={{
                    left: 0,
                    right: 0,
                    top: 8,
                    bottom: 0,
                  }}
                >
                  {/* 차트 선 */}
                  <Line
                    dataKey="value"
                    type="natural"
                    stroke={item.chartColor}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
