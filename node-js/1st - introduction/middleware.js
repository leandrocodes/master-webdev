const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo1 = (ctx) => {
  ctx.valor3 = 'mid3'
}