
const allColors = ['Ante / Bronceado / Beige', 'Ante y Blanco', 'Azul Crema', 'Blanco', 'Calicó', 'Siamés Crema', 'Crema / Marfil', 'Dilute Calicó', 'Dilute Tortoiseshell', 'Gris / Azulado / Plata', 'Gris y Blanco', 'Lilac Point', 'Marrón / Chocolate', 'Naranja y Blanco', 'Naranja y Rojo', 'Persa Smoke', 'Siamés ', 'Siamés Chocolate', 'Siamés Red Point', 'Siamés Seal Point', 'Tabby (Ante / Bronceado / Beige)', 'Tabby (Atigrado)', 'Tabby (Gris / Azulado / Plata)', 'Tabby (Leopardo / Manchado)', 'Tabby (Marrón / Chocolate)', 'Tabby (Naranja / Rojo)', 'Torbie', 'Tortoiseshell', 'Banco y Negro', 'Amarillo / Bronceado / Rubio /', 'Arlequín', 'Atigrado', 'Beige', 'Bicolor', 'Blanco / Crema', 'Golden', 'Gris / Azulado / Plata', 'Marrón / Chocolate', 'Merlé (Azul)', 'Merlé (Rojo)', 'Negro', 'Rojo / Castaño / Naranja', 'Sable', 'Tricolor (Marrón, Negro y Blanco)']

const colorsSort = allColors.sort()

const colorsFilter = new Set(colorsSort)


export const colorsFavs = [...colorsFilter]