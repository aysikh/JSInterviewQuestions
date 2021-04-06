def isBalanced(string)

  # iterate forward through string
  # track opening order
  # check closing order
      # impossible to fail on an opener until you reach the end of the string
      # can only fail on a closer
      # so simply track the openers and only scrutinize the closers

  openers = ["(", "[", "{"]

  unpairedOpeners = []

  string.split('').each do |char|
      
      if openers.include?(char)
          # opener -- track
          unpairedOpeners << char
      else
          # closer -- evaluate
          partner = unpairedOpeners.pop
          case char
              when ")"
                  if partner != "("
                      return false
                  end
              when "]"
                  if partner != "["
                      return false
                  end
              when "}"
                  if partner != "{"
                      return false
                  end
              else
                  return nil
          end
      end
      
  end

  if unpairedOpeners.size == 0
      return true
  else
      return false
  end

end

puts isBalanced("()[]{}")