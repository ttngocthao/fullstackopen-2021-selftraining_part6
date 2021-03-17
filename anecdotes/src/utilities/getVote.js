export const getVote = () => {
    const result = (100 * Math.random()).toFixed(0)
    // console.log('getVote',typeof(result))
    return parseInt(result)
    }