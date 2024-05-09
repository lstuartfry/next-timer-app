export default function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button className="hover:text-gray-300 active:scale-95" onClick={onClick}>
      {children}
    </button>
  );
}
