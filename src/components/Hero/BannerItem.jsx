export default function BannerItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 ">
      <div className="p-3 bg-white rounded-full shadow-sm">
        <Icon className="w-7 h-7 text-graphite-950" />
      </div>
      <h4 className="text-xl  font-bold text-graphite-950 ">{title}</h4>
      <p className="text-sm text-gray-600 max-w-[200px]">{desc}</p>
    </div>
  );
}
