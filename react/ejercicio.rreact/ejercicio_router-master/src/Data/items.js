export const items = [
{id:0,nombre: "Javi "},
{id:1,nombre: "carlos"},
{id:2,nombre: "andrea"},
{id:3,nombre: "jesus"},
{id:4,nombre: "antonio"},
{id:5,nombre: "elena"},
{id:6,nombre: "Gabri"},
{id:7,nombre: "fran"},
];

export function getContact(id) {
    return items.find((item)=> item.id == id);
}