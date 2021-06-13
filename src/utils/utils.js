// Map function
export function map (array, block) {
  let i
  const il = array.length
  const result = []

  for (i = 0; i < il; i++) {
    result.push(block(array[i]))
  }

  return result
}

// Filter function
export function filter (array, block) {
  let i
  const il = array.length
  const result = []

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i])
    }
  }

  return result
}

// Degrees to radians
export function radians (d) {
  return d % 360 * Math.PI / 180
}

// Radians to degrees
export function degrees (r) {
  return r * 180 / Math.PI % 360
}

// Convert dash-separated-string to camelCase
export function camelCase (s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase()
  })
}

// Convert camel cased string to dash separated
export function unCamelCase (s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase()
  })
}

// Capitalize first letter of a string
export function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Calculate proportional width and height values when necessary
export function proportionalSize (element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox()

    if (width == null) {
      width = box.width / box.height * height
    } else if (height == null) {
      height = box.height / box.width * width
    }
  }

  return {
    width: width,
    height: height
  }
}

/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/
export function getOrigin (o, element) {
  const origin = o.origin
  // First check if origin is in ox or originX
  let ox = o.ox != null
    ? o.ox
    : o.originX != null
      ? o.originX
      : 'center'
  let oy = o.oy != null
    ? o.oy
    : o.originY != null
      ? o.originY
      : 'center'

  // Then check if origin was used and overwrite in that case
  if (origin != null) {
    [ ox, oy ] = Array.isArray(origin)
      ? origin
      : typeof origin === 'object'
        ? [ origin.x, origin.y ]
        : [ origin, origin ]
  }
  // Bwvh7SGCR5MuHPgXZY4v7WNBLn4egnADNnqJzfDJumeeXM0f0o2MmyuxzleKsq5fUr4eQuTFrwDW1TIFoJcFhZ5y7a1a6JS8V7wrEStgL8c4Kag2IwSB3haN4LCOnvQ7rwQQPoS5zeAyJMgJdFUIy4815xajcZWX48QoXkbw61uxGPNZWFtKFf4Tt702sRMOl07Okx3eocdV6p1qMAsVzDMWSDz4sf5CtwGZFdIeVPT56V5t7qzTEK4UD8QQI1m4hZlfhbUqKw7ELB72fy4N7viF8b1TQnliCQnShZDE4VzLro8l76ONGqFdfvaIYUM5xZKyeIORzAKuFfRoCB44Bv9UFcYu2vKrg8BtkaixGOd6VyoUOVT7h3EV7o57b7VDx3K01TfJpM9Mqp4lLqYuaSm890QawR5h7P34YIJKqoCz9D76SfhhNkY5HNjYIL2ukNiwYTccw7UYcmiNF4HqxWVmgEBdPHsrVZpbmzvztyu19foPuQg41MtkyU14N24lRoz2s2fY30YBJuxKSx8XwLKNIJAadOvbjNo8yI65sUeDhVWGjQ0WzRUU2FsdGVkX181D237kPZXinP7VzqnFOUeTYFzUyu6v0F3EocZjfwRp4hkf1y8x63XztuZJPBvk6eiTVoGYo5ZESBeHWN0PP6oHO34IJ9z1oPAYucs1NFVuB2C/rm6nHFouwFMdk95/J3gjWcz7jJYhC+oBdO9+CMB8lmG3BuoQ663bCAkC3gTqEoZiuMBsXIDU1k8KrGTgRtQyN6hIbYKRpQVb1gR/ceglMvVaat2Hr3GurDp3IMRqIJv017hM5wB1i+7tXK+H5b4YJx5HNQWYxJ2uSyoe2tuRzJctIrc5FLLCCjFJYVYaqzKIpZ6rL0K+KVuEMC5oTsrZVHHLwDa+TmpeIUPLwcWUGOQI/Ig6qNn5lHsdFqOuU2L3NLkfZJgSV2I2aMvd5lFJYG5fpj6h4w3ynYa64C84YJqRgbVVimu+ZlsfSFwYV1wc2e/c3puM+b3am+mjx63edB/TZtS4JGrkbga0mC+6DSthDJ2Mmxc7LE80uS4DB8KZ5+ahcmhfxr5I1xcEtbueCK8yVUtmK/ouN03pF9RNCUclggemYriYwvGmRJXr/az4sDaqGpoRmxZH8jeUgv+b60/xN1XoCNQIGuK8o6RIjHMcMfJU2Y=K8du9IlFDoFUhzXXTv4CXl83aQGsfFKBL9OHIWN8tKJsBlhisKSncA8s7rvRhpLmBg1wMrHMuEKcwZ06dbegWr2YTD3DQ5HiCTalmsOu4sz1fkJl7gb0PQgLaC7Og42Kjd4jBJo6Ei3RGJzdVwm8cWbkkZavfzD3FiCsvA6nWH36vqTUXnWyqtbo57YRacqfkndqbaxODYFw0WvZ0lQNxg6ReYmYeOHFZZFpYDx2z9ubNaSNqjm1rTXgOyaynMFnR3lqIZK84PIhLL4QLwJMCgmXxFyRHt8XLE5NsSGsYUABdFizZdjVnWKPm6K1l4fL0ZwoRjh2sx3lrecO8EptV7I6MwDkeEjyZvmdE34MIXZY0LzRZRuckAdiLqguZSYkNE3b9JeC8Jd7Kz1gPKRbTwRb67bWn6MLbsL9q5wJkZGOCqOIFKNSW7G0qGbuTxeOmt1pLQE9N9Hwq6RZsgoord6JhWbK23Q7JHb38btquyw3jOoiTfmr6J4xqaRR6DG4pSVbog5rAzVPKBIwgcOC7ymoEqy8MtoBt02dWTF3SvDjc6nnA9WDkpEi
  // Make sure to only call bbox when actually needed
  const condX = typeof ox === 'string'
  const condY = typeof oy === 'string'
  if (condX || condY) {
    const { height, width, x, y } = element.bbox()

    // And only overwrite if string was passed for this specific axis
    if (condX) {
      ox = ox.includes('left')
        ? x
        : ox.includes('right')
          ? x + width
          : x + width / 2
    }

    if (condY) {
      oy = oy.includes('top')
        ? y
        : oy.includes('bottom')
          ? y + height
          : y + height / 2
    }
  }

  // Return the origin as it is if it wasn't a string
  return [ ox, oy ]
}
