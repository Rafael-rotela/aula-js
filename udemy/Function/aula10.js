function recursiva(max) {
    // Toda recursão precisa de uma condição de parada.
    if (max >= 10) return;

    max++;
    console.log(max);
    recursiva(max);
}

// A função chama a si mesma até alcançar o valor de parada.

recursiva(0);
