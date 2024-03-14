import { cn } from "../_lib/utils";

interface Props extends React.PropsWithChildren {
  fill?: boolean;
  center?: boolean;
}

export function Container({ fill = false, center = false, children }: Props) {
  return (
    <div
      className={cn(
        "container flex flex-col",
        fill && "min-h-screen",
        center && "justify-center items-center"
      )}
    >
      {children}
    </div>
  );
}
