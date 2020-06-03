export default function (number) { 
   return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}
