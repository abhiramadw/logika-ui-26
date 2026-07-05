export type CompetitionCategory = "high-school" | "undergraduate";

export type Competition = {
  slug: string;
  name: string;
  shortDesc: string;
  category: CompetitionCategory;
  href: string;
  prizeFirst: string;
  logo: string;
};

export const competitions: Competition[] = [
  {
    slug: "mic",
    name: "Mathematics Individual Competition",
    shortDesc:
      "Mathematics Individual Competition (MIC) merupakan kompetisi matematika tingkat nasional yang menantang peserta untuk mengasah kemampuan berpikir logis, analitis, dan sistematis dalam memecahkan soal standar olimpiade secara individu.",
    category: "high-school",
    href: "/competitions/mic",
    prizeFirst: "Rp 6.000.000,00 + Piala",
    logo: "/images/MIC_Logo.png",
  },
  {
    slug: "mtc",
    name: "Mathematics Team Competition",
    shortDesc:
      "Mathematics Team Competition (MTC) merupakan kompetisi matematika tingkat nasional yang menguji pemikiran kritis, strategi, dan kerja sama tim melalui penyelesaian soal standar olimpiade serta rangkaian permainan interaktif.",
    category: "high-school",
    href: "/competitions/mtc",
    prizeFirst: "Rp 8.000.000,00 + Piala",
    logo: "/images/MTC_Logo.png",
  },
  {
    slug: "asc",
    name: "Actuarial Science Competition",
    shortDesc:
      "Actuarial Science Competition (ASC) merupakan kompetisi ilmu aktuaria tingkat nasional yang menantang kemampuan analitis dan kuantitatif peserta dalam memecahkan soal mengenai konsep dasar hingga terapan ilmu aktuaria secara individu.",
    category: "high-school",
    href: "/competitions/asc",
    prizeFirst: "Rp 2.000.000,00 + Piala",
    logo: "/images/ASC_Logo.png",
  },
  {
    slug: "sec",
    name: "School Essay Competition",
    shortDesc:
      "School Essay Competition merupakan kompetisi esai tingkat nasional yang bertujuan untuk menjadi wadah bagi peserta menuangkan gagasan, pemikiran kritis, serta solusi kreatif terhadap isu-isu yang relevan dengan penerapan matematika yaitu statistika.",
    category: "high-school",
    href: "/competitions/sec",
    prizeFirst: "Rp 1.500.000,00 + Piala",
    logo: "/images/SEC_Logo.png",
  },
  {
    slug: "uec",
    name: "University Essay Competition",
    shortDesc:
      "University Esssy Competition merupakan kompetisi esai tingkat nasional yang bertujuan untuk menjadi wadah bagi peserta dalam menuangkan gagasan, pemikiran kritis, serta solusi kreatif terhadap isu-isu yang relevan dengan penerapan ilmu matematika.",
    category: "undergraduate",
    href: "/competitions/uec",
    prizeFirst: "Rp 2.000.000,00 + Piala",
    logo: "/images/UEC_Logo.png",
  },
  {
    slug: "acc",
    name: "Actuarial Case Competition",
    shortDesc:
      "Actuarial Case Competition (ACC) merupakan kompetisi aktuaria berskala nasional yang menantang peserta untuk mengembangkan kemampuan analisis, pemodelan, dan penyelesaian masalah berbasis ilmu aktuaria terhadap studi kasus nyata yang relevan.",
    category: "undergraduate",
    href: "/competitions/acc",
    prizeFirst: "Rp 2.000.000,00 + Piala",
    logo: "/images/ACC_Logo.png",
  },
  {
    slug: "dsc",
    name: "Data Science Competition",
    shortDesc:
      "Data Science Competition (DSC) merupakan kompetisi analisis data berskala nasional yang menantang peserta untuk mengasah kemampuan dalam mengolah dan menganalisis data pada permasalahan nyata.",
    category: "undergraduate",
    href: "/competitions/dsc",
    prizeFirst: "Rp 3.000.000,00 + Piala",
    logo: "/images/DSC_Logo.png",
  },
];

export const highSchoolCompetitions = competitions.filter(
  (c) => c.category === "high-school"
);

export const undergraduateCompetitions = competitions.filter(
  (c) => c.category === "undergraduate"
);
