interface TContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
}

interface TProps {
  children: React.ReactNode;
}