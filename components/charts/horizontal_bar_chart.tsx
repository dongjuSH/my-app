"use client"

import * as React from 'react';

import { SquareArrowUpRight } from "lucide-react"

import { Progress, ProgressIndicator, ProgressTrack } from '@/components/ui/progress';
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// 차트 데이터
const chartData = [
  {
    country: 'United Kingdom', // 라벨
    value: 12628, // 데이터 값
    percentage: 80, // 퍼센티지
    image: 'https://flagcdn.com/gb.svg', // 이미지
    color: 'bg-[#1caf62]' // 컬러
  },
  {
    country: 'United States',
    value: 10628,
    percentage: 70,
    image: 'https://flagcdn.com/us.svg',
    color: 'bg-[#e57033]'
  },
  {
    country: 'Sweden',
    value: 8628,
    percentage: 60,
    image: 'https://flagcdn.com/se.svg',
    color: 'bg-[#335cfc]'
  },
  {
    country: 'Turkey',
    value: 6628,
    percentage: 40,
    image: 'https://flagcdn.com/tr.svg',
    color: 'bg-[#7d53f7]'
  },
  {
    country: 'Spain',
    value: 3628,
    percentage: 30,
    image: 'https://flagcdn.com/es.svg',
    color: 'bg-[#31adea]'
  }
];

export default function HorizontalBarChart() {
  // 차트 모션
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full h-full py-3 bg-[#101211] border-[#282b2a] text-white flex flex-col gap-0">
      {/* 카드 상단 */}
      <CardHeader className="px-4">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-[#14302f] rounded-full flex items-center justify-center">
            <SquareArrowUpRight className="size-4 text-[#4fa697]" />
          </div>
          <span className="text-white text-lg">
            Customers Active
          </span>
        </div>
      </CardHeader>

      <CardContent className="py-6 px-4 flex flex-1 flex-col justify-between">
        {chartData.map((item) => (
          <div key={item.country}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* 국가 이미지 */}
                <img src={item.image} alt={item.country} className="w-6 h-6 object-cover rounded-full" />

                {/* 국가명 */}
                <span className="text-white text-lg">
                  {item.country}
                </span>
              </div>

              {/* 값, 퍼센트 */}
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">
                  {item.value.toLocaleString()}
                </span>
                <span className="text-white text-sm">
                  ({item.percentage}%)
                </span>
              </div>
            </div>

            {/* 프로그레스 바(퍼센티지 따라 출력) */}
            <Progress value={(item.percentage * progress) / 100} className="w-full mt-2">
              <ProgressTrack className="h-2 bg-[#282b2a]">
                {/* 색상 */}
                <ProgressIndicator className={item.color} />
              </ProgressTrack>
            </Progress>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}