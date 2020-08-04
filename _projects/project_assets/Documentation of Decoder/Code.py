import hub, utime
from spike import PrimeHub


def knn_1D(test_data, training_data=[], data_labels=[], k=5):
    distance_list = [(0, 0)] * len(training_data)
    for i in range(len(training_data)):
        # Calculate distance between sample and each training data point
        # Build a list of (distance, label) tuples
        distance_list[i] = (abs(test_data-training_data[i]),data_labels[i])
    # Sort the list based on distances
    distance_list.sort(key=lambda point: point[0])
    #print(distance_list)
    # Find the class labels corresponded to the k smallest distances
    nearest_neighbors = distance_list[:k]
    nearest_labels = [point[1] for point in nearest_neighbors]
    # Find mode (most common) of k-nearest labels
    guess = max(nearest_labels, key=nearest_labels.count)
    #print(guess)
    return guess
    
# Lists to store training data for knn function
training_data = [1,2,1,6,5,7]
data_labels=['dot','dot','dot','dash','dash','dash']

# Turns all the LEDs off on the jub
image = hub.Image("00000:00000:00000:00000:00000")
hub.display.show(image)

# Training mode
while True:
    click_time_start = 0
    click_time_stop = 0
    click_time_total = 0
    print("It's time to train your SPIKE morse code decoder. Click the left button for different periods of time to train your decoder to recognize dots and dashes")
    print("Try to train your decoder to recognize dots as 1 second long pushes of the button and dashes as 3 second long pushes of the button")
    print("Hit the connect button to exit training mode")
    while not hub.button.left.is_pressed() and not hub.button.connect.is_pressed():
        print("", end = '')

    # Calculates how long the button is pressed for
    if hub.button.left.is_pressed():
        time_start = utime.time()
        #print("start: " + str(time_start))
        while hub.button.left.is_pressed():
            print("", end = '')
        time_stop = utime.time()
        #print("stop: " + str(time_stop))
        time_total = time_stop - time_start
        #print("total: " + str(time_total))

        # Makes a dot/dash guess based on time button was pressed
        guess = knn_1D(time_total, training_data, data_labels)
        print(guess)

        # Displays guess on SPIKE Hub
        if guess == "dot":
            image = hub.Image("00000:00000:00900:00000:00000")
            hub.display.show(image)
        elif guess == "dash":
            image = hub.Image("00000:00000:09990:00000:00000")
            hub.display.show(image)
        
        # Appends correct set of new training data to training lists
        training_data.append(time_total)
        print("Click the right arrow if the guess is correct and the center button if the guess is wrong")
        while not hub.button.right.is_pressed() and not hub.button.center.is_pressed():
            print("", end = '')
        if hub.button.right.is_pressed():
            data_labels.append(guess)
            #print("got here")
        elif hub.button.center.is_pressed():
            if guess == "dot":
                data_labels.append("dash")
                image = hub.Image("00000:00000:09990:00000:00000")
                hub.display.show(image)
            else:
                data_labels.append("dot")
                image = hub.Image("00000:00000:00900:00000:00000")
                hub.display.show(image)
        #print(training_data)
        #print(data_labels)
    
    # If connect button is pressed leave training mode
    elif hub.button.connect.is_pressed():
        break

# Decoding mode
while True:
    click_time_start = 0
    click_time_stop = 0
    click_time_total = 0
    space_time_start = 0
    space_time_stop = 0
    space_time_total = 0
    message = ""
    print("You are now in decoding mode")
    print("If you want to decode a message press the right arrow button")
    print("If you want to end the program press the center button")
    while not hub.button.right.is_pressed() and not hub.button.center.is_pressed():
        print("", end = '')

    # If right button is pressed, decode message
    if hub.button.right.is_pressed():
        print("Enter your morse code message using the left arrow button")
        print("Dots and dashes will appear on the SPIKE screen as you enter them")
        print("To enter a space between letters wait 3 seconds before entering the dot/dash that begins the next letter")
        print("To enter a space between words (represented by a slash in morse code) wait 7 seconds before entering the dot/dash of the letter that begins the next word")
        print("Input dot-dash-dot-dash-dot (no word spaces) to signify that the message that you want to decode has ended")
        english_word = ""
        
        # 2D list - stores dot/dash letters and their corresponding english letters in same columns 
        decode_list = [["dot-dash", "dash-dot-dot-dot", "dash-dot-dash-dot", "dash-dot-dot", "dot", "dot-dot-dash-dot", "dash-dash-dot", "dot-dot-dot-dot", "dot-dot", "dot-dash-dash-dash", "dash-dot-dash", "dot-dash-dot-dot", "dash-dash", "dash-dot", "dash-dash-dash", "dot-dash-dash-dot", "dash-dash-dot-dash", "dot-dash-dot", "dot-dot-dot", "dash", "dot-dot-dash", "dot-dot-dot-dash", "dot-dash-dash", "dash-dot-dot-dash", "dash-dot-dash-dash", "dash-dash-dot-dot", "dot-dash-dot-dash-dot"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "out"]]
        
        # Tests for each type of space (value, letter, and word) - if english_word = out stop decoding 
        while english_word != "out":
            word_space = False
            english_word = ""
            while not word_space:
                letter_space = False
                dot_dash_letter = ""
                english_letter = ""
                while not letter_space:
                    value_space = False
                    dot_dash_value = ""
                    while not value_space:
                        # Calculates time button is pressed and released
                        while not hub.button.left.is_pressed():
                            print("", end = '')
                        time_start = utime.time()
                        #print("start: " + str(time_start))
                        while hub.button.left.is_pressed():
                            print("", end = '')
                        time_stop = utime.time()
                        space_time_start = utime.time()
                        #print("stop: " + str(time_stop))
                        time_total = time_stop - time_start
                        #print("total: " + str(time_total))
                        
                        # Figures out if press is dot or dash
                        dot_dash_value += knn_1D(time_total, training_data, data_labels)
                        print(dot_dash_value, end ='')
                        if dot_dash_value == "dot":
                            image = hub.Image("00000:00000:00900:00000:00000")
                            hub.display.show(image)
                        elif dot_dash_value == "dash":
                            image = hub.Image("00000:00000:09990:00000:00000")
                            hub.display.show(image)
                            
                        # Figures out what kind of space to make true based on time released 
                        space_time_total = 0
                        while not hub.button.left.is_pressed():
                            space_time_stop = utime.time()
                            space_time_total = space_time_stop - space_time_start
                        value_space = space_time_total >= 0
                        letter_space = space_time_total >= 2
                        word_space = space_time_total >= 6

                        # Adds a dash between dot/dash values if the dot/dash is not the last dot/dash in the letter
                        if value_space and not letter_space:
                            dot_dash_value += "-"
                    #print("value space")
                    dot_dash_letter += dot_dash_value
                #print("letter space")

                # Figures out which engligh letter the dot/dash letter is
                i = 0
                for morse_code_letter in decode_list[0]:
                    #print("Got here")
                    if morse_code_letter == dot_dash_letter:
                        english_letter = decode_list[1][i]
                        print(english_letter)
                        break
                    i += 1
                    # If the dot/dash letter is not recognized as an english letter english letter = [NOT RECOGNIZED]
                    if i == len(decode_list[0]):
                        english_letter = "[NOT RECOGNIZED]"
                        #print(english_letter)
                        
                english_word += english_letter
                print(english_word)
            #print("word space")

            # If the word is the last word in the message do not add a space, otherwise add a space to the message string
            if english_word == "out":
                message += english_word
            else:
                message += english_word + " "
        
        # Tells the user their decoded morse code message
        print("The decoded morse code message is: " + message)
    
    # If center button is pressed, leave decoding mode
    elif hub.button.center.is_pressed():
        break
        
# Tells the user program ended
print("Program ended. Thank you for using the SPIKE morse code decoder! :)")














