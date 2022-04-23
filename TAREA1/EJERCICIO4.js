// Arreglo

const comida = 
[
    {
        nombre: "Lasaña de Carne",
        ingredientes: {
            Ingrediente1: "1 Cucharada Mantequilla Con Sal",
            Ingrediente2:"1 1/2 Litros Agua Para cocinar la pasta",
            Ingrediente3:"1 1/2 Tazas Queso Mozzarella Rallado.",
            Ingrediente4:"1 Rama Apio Cortado en cubos.",
            Ingrediente5:"1/2 Unidad Pimiento Verde Picado en cubos pequeños.",
            Ingrediente6:"1/2 Unidad Pimiento Rojo Picado en cubos pequeños.",
            Ingrediente7:"2 Unidades Ajo Machacados.",
            Ingrediente8:"4 Cucharadas Queso Parmesano Rallado.",
            Ingrediente9:"1 Sobre Caldo Criollita MAGGI",
            Ingrediente10:"2 Cucharadas Harina De Trigo",
            Ingrediente11:"1/2 Taza Agua Para el relleno.",
            Ingrediente12:"1/2 Taza Albahaca Fresca Finamente picada.",
            Ingrediente13:"1 Taza Leche Evaporada LA LECHERA",
            Ingrediente14:"1 Pizca Nuez Moscada",
            Ingrediente15:"4 Cucharaditas Sal",
            Ingrediente16:"1/2 Unidad Cebolla Perla Picada en cubos pequeños",
            Ingrediente17:"1/2 Taza Salsa De Tomate Maggi",
            Ingrediente18:"3 Tazas Carne De Res Molida",
            Ingrediente19:"1 Paquete Pasta para lasaña"
        },
        tipo: "Plato Fuerte",
    },
    {
        nombre: "Michelada",
        ingredientes: {
            Ingrediente1: "2 cerveza bien fría",
            Ingrediente2: "1 taza de hielo",
            Ingrediente3: "1/2 taza de jugo de limón",
            Ingrediente4: "1 cucharada de salsa inglesa Worcestershire",
            Ingrediente5: "1 cucharada de salsa TABASCO original",
            Ingrediente6: "1 cucharada de chamoy en polvo",
            ingrediente7: "1/2 de un limón"
        },
        tipo: "Bebida",
    },
    {
        nombre: "Cuba Libre",
        ingredientes: {
            Ingrediente1: "50ml Ron",
            Ingrediente2: "100 ml de refresco de Coca-Cola",
            Ingrediente3: "Limón fresco (solo unas gotas)",
            Ingrediente4: "Suficiente hielo (cubitos)para llenar un vaso largo"
        },
        tipo: "Bebida",
    }
]

// Bucle1
for (let x = 0; x < comida.length; x++) {
    const comidafav = comida [x];
    console.log (comidafav)
}


// Bucle2
// let x = 0
// while (x < comida.length) {
//     console.log ( comida [x])
//     x++
// }


// Bucle3
// comida.forEach(comidafav => {
//     console.log (comidafav)
// });


// Bucle4
// let x = 0
// do {
//     console.log ( comida [x])
//     x++
// } while (x < comida.length);