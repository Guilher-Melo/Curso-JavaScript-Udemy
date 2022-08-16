// Objeto Map

const pessoas = [
    {id: 3, nome: 'Luis'},
    {id: 2, nome: 'Lucas'},
    {id: 1, nome: 'Maria'}
]

const novasPessoas = new Map()
for (const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id, {... pessoa})
}

for (const pessoas of novasPessoas){
    console.log(novasPessoas)
}