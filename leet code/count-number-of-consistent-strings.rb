# @param {String} allowed
# @param {String[]} words
# @return {Integer}
def count_consistent_strings(allowed, words)
  allowed_chars = allowed.chars
  count = 0
  words.each do |word|
      for i in 0...word.length
          if !allowed_chars.include?(word[i])
              count -= 1
              break
          end
      end
      count += 1
  end
  count
end