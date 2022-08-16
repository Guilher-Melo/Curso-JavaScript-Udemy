function recursiva(max){  // Ela se chama até que uma condição seja atingida, como um loop
    console.log(max)
    if (max >=100) return
    max++
    recursiva(max)
}

recursiva(0)