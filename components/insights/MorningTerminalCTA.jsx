import Link from "next/link";

export default function MorningTerminalCTA({ locale = "en" }) {
  const isVi = locale === "vi";

  return (
    <section className="mt-16 border border-teal/20 rounded-lg bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          {/* Overline */}
          <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-3 block">
            {isVi ? "BẢN TIN MỖI SÁNG" : "MORNING TERMINAL"}
          </span>

          {/* Headline */}
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
            {isVi
              ? "Thông tin mua hàng hàng ngày"
              : "Daily Procurement Intelligence"}
          </h3>

          {/* Description */}
          <p className="text-body-text text-sm leading-relaxed max-w-lg">
            {isVi
              ? "Giá polymer Trung Quốc, tín hiệu thời điểm mua hàng, và cảnh báo chuỗi cung ứng — gửi đến trước khi thị trường mở cửa. Miễn phí cho nhà nhập khẩu Đông Nam Á."
              : "China-origin polymer pricing, buy-timing signals, and supply chain alerts — delivered before your market opens. Free for Southeast Asian importers."}
          </p>
        </div>

        <Link
          href="/terminal"
          className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-light text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px whitespace-nowrap shrink-0"
        >
          {isVi ? "Đăng ký miễn phí" : "Subscribe Free"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8h10m-4-4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
