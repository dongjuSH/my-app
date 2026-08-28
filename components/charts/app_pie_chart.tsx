'use client';

import { ChartPie } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

// 상품 데이터
const productData = [
  {
    name: 'To Be Packed', // 라벨
    value: 110000, // 데이터 값
    fill: '#35aeeb' // 색상(차트 자체에서 fill 값으로 받음)
  },
  {
    name: 'Process Delivery',
    value: 98000,
    fill: '#e3a916'
  },
  {
    name: 'Delivery Done',
    value: 140000,
    fill: '#1fb19c'
  },
  {
    name: 'Returned',
    value: 67236,
    fill: '#ed3591'
  }
];

// 전체 합계
const totalValue = productData.reduce((total, item) => total + item.value, 0);

// 차트 설정
// Object.fromEntries : [키, 값] 형태의 배열을 객체로 바꿔주는 메서드
const chartConfig = Object.fromEntries(
  productData.map((item) => [
    // productData를 ChartConfig가 원하는 다음 형태로 반환(label, color 값이 배열에 있어 중복 작성하지 않기 위해 작성)
    item.name,
    {
      label: item.name,
      color: item.fill,
    }
  ])
) satisfies ChartConfig; // satisfies : 타입의 조건을 검사

export default function AppPieChart() {
  return (
    <Card className="w-full h-full py-3 bg-[#101211] border-[#282b2a] text-white gap-0">
      {/* 카드 상단 */}
      <CardHeader className="px-4">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-[#372e1b] rounded-full flex items-center justify-center">
            <ChartPie className="size-4 text-[#c09937]" />
          </div>
          <span className="text-white text-lg">
            Product Activity
          </span>
        </div>
      </CardHeader>

      {/* 카드 내용 */}
      <CardContent className="h-full px-8 flex items-center justify-between">
        {/* 차트 */}
        <ChartContainer config={chartConfig} className="w-full max-w-70 aspect-square">
          <PieChart>
            {/* 차트 툴팁 */}
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

            {/* 차트 조정 */}
            <Pie
              data={productData}
              dataKey="value" // 데이터 값
              nameKey="name" // 라벨
              startAngle={90} // 차트 시작 지점
              endAngle={-270} // 차트 종료 지점
              innerRadius={80} // 차트 안 반지름
              outerRadius={100} // 차트 밖 반지름
              cornerRadius={16} // 차트 모서리 굴곡
              paddingAngle={2} // 차트 조각 사이 간격
            >
              {/* 라벨 */}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 4}
                          className="fill-white text-2xl font-semibold"
                        >
                          {totalValue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 18}
                          className="fill-muted-foreground text-xs"
                        >
                          Total Activity
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        {/* 범례 */}
        <div className="w-full max-w-55 flex flex-col gap-3">
          {productData.map((item) => (
            <div key={item.name} className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-4 rounded-sm" style={{ backgroundColor: item.fill }} />
                <span className="text-white text-sm">{item.name}</span>
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}