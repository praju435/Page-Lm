export default function BagFab({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <div className="fixed md:bottom-4 md:right-8 bottom-auto right-4 top-16 md:top-auto z-50">
      <div className="relative cursor-pointer hover:scale-105 transition-transform duration-300" onClick={onClick}>
        <img
          src="https://forum.playhive.com/uploads/default/original/3X/f/3/f3e340eef1c12e1080f55958d70c5afc8a73dfa3.png"
          alt="bag"
          className="md:h-20 h-14 w-auto"
          loading="lazy"
          decoding="async"
        />
        <div className={`absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-6 w-6 items-center justify-center font-bold ${count ? "flex" : "hidden"}`}>
          {count}
        </div>
      </div>
    </div>
  );
}