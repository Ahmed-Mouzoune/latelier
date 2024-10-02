interface ICat {
  id: string;
  imageUrl: string;
  score: number;
}

interface ICatApiAtelier {
  id: string;
  url: string;
}

type CatVersus = [ICat, ICat];
