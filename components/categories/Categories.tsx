import React from 'react';
import styles from "./styles.module.css"
import Link from 'next/link';

type CategoryProps = {
  name: string;
  id: number;
};

type CategoriesFeatureProps = {
  categories?: CategoryProps[];
};

const Categories: React.FC<CategoriesFeatureProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories?.map((category) => (
        <Link key={category.id} className={styles.obje} href={`/${category.id}`}>{category.name}</Link>
      ))}
    </div>
  );
};

export default Categories;
