function something(algo) {
  console.log('Le hacemos algo a: ', algo)
  algo = `Siempre hay ${algo}`
  return {
    on: (cachaplam) => {
      return `${algo} muy ${cachaplam}`
    }
  }
}

console.log(something('hediondo').on('cara de verga'));