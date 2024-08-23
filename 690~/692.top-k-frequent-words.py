class Solution(object): #python-2
    def topKFrequent(self, words, k):
        """
        :type words: List[str]
        :type k: int
        :rtype: List[str]
        """
        cnt = Counter(words)
        return sorted(cnt, key=lambda x: (-cnt[x], x))[:k]