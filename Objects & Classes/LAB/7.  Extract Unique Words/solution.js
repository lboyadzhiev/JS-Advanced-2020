function solve(data) {
   return [...new Set(data
      .join('')
      .toLowerCase()
      .match(/\w+/gim)
   )]
      .join(', ');
}

console.log(solve(
   [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
      'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
      'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
      'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
      'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
      'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
      'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
   ]) === 'lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, pellentesque, quis, hendrerit, dui, quisque, fringilla, est, urna, vitae, efficitur, vestibulum, diam, dignissim, varius, non, fermentum, felis, ultrices, ex, massa, faucibus, nunc, aliquam, ut, morbi, in, pharetra, vel, mattis, arcu, integer, ac, turpis, commodo, nulla, sed, elementum, lectus, vivamus, malesuada, dapibus, congue, egestas, metus'
);