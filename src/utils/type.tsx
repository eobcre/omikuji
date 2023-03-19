export type Omikuji = {
  name: string;
  description: string;
};

export type TitleProps = {
  title: string;
};

export type ButtonProps = {
  name: string;
  setOmikuji: React.Dispatch<React.SetStateAction<Omikuji>>;
};

export type ResultProps = {
  omikuji: Omikuji;
};
