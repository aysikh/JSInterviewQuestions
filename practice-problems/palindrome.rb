def palindrome?(string)
  if string == string.reverse
    return true
  else
    return false
  end
end

 palindrome?("redder")