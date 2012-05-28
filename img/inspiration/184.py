import os
import sys

def main():
    root = os.path.normpath(os.path.dirname(os.path.abspath(__file__)))

    i = 1
    for filename in os.listdir(root):
        name, ext = os.path.splitext(os.path.join(root, filename))

        os.rename(os.path.join(root, filename), os.path.join(root, '%d%s' % (i, ext)))

        print os.path.join(root, '%d%s' % (i, ext))

        i += 1

if __name__ == '__main__':
    main()
