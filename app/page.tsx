// import : 다른 파일에서 내보낸 컴포넌트나 기능을 가져옴
// @/ : 프로젝트의 기준 경로(root)부터 파일 경로에 접근
import Header from "@/components/layout/header";
import AppSidebar from "@/components/layout/app_sidebar";
import ProductActivity from "@/components/product_activity";
import CustomerActivity from "@/components/customer_activity";
import RecentTransactions from "@/components/recent_transactions";
import { SidebarProvider } from "@/components/ui/sidebar";

// export default : 해당 파일의 대표 컴포넌트를 외부에서 사용할 수 있도록 내보냄
export default function Home() {
  // return : 화면에 렌더링할 JSX를 반환
  // JSX : JavaScript/TypeScript 안에서 HTML과 비슷한 형태로 UI를 작성하는 문법
  return (
    <SidebarProvider>
      {/* sidebar */}
      <AppSidebar />
      <div className="w-full p-2">
        <main className="bg-[#101211] border border-[#282b2a] rounded-xl flex flex-col">
          {/* header */}
          <Header />
          <div className="p-4">
            {/* product section */}
            <ProductActivity />
            {/* customer section */}
            <CustomerActivity />
            {/* transactions section */}
            <RecentTransactions />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}