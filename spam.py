import pyautogui, time 

position = pyautogui.position()
message = "holla"
for a in range (100):
    pyautogui.click(position.x,position.y)
    pyautogui.typewrite(message)
    time.sleep(1)
    pyautogui.press(["enter"])