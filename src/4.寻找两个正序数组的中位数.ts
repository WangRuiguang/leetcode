function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const numsSort = [...nums1, ...nums2].sort((pre, cur)=> pre - cur)
  if(numsSort.length%2 === 0) {
    return (numsSort[numsSort.length/2 - 1] + numsSort[numsSort.length/2]) / 2
  } else {
    return numsSort[Math.floor(numsSort.length/2)]
  }
};