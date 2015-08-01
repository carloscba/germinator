import cv2
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

from __future__ import print_function


def filtro_contornos(contuors, dim_min_contuor, dim_max_contuor):
    """Da un nuevo contorno donde sus elementos son mas grandes que dim_min_contuor"""
    new_contuors = []
    for contuor in contuors:
        if len(contuor) > dim_min_contuor and len(contuor) < dim_max_contuor:
            new_contuors.append(contuor)
    return new_contuors

def encontar_contornos(img, thresh_min, thresh_max, dim_min_contuor, dim_max_contuor, filtro=0):
    im = cv2.imread(img)
    imgray = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)
    ret,thresh = cv2.threshold(imgray, thresh_min, thresh_max, filtro)
    contours, hierarchy = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
    new_contuors = filtro_contornos(contours, dim_min_contuor, dim_max_contuor)
    return new_contuors

def find_cp(contours):
    contuor_pos = []
    for contuor in new_contuors:
        x, y = [], []
        for pixel in contuor:
            x.append(pixel[0][0])
            y.append(pixel[0][1])
        x_pos = sum(x) / len(x)
        y_pos = sum(y) / len(y)
        contuor_pos.append([x_pos, y_pos])
    return contuor_pos

def distancia(a, b):
    return (a[0] - b[0])**2 + (a[1] - b[1])**2

def remove_near_cp(pos, dist_min):
    for a, b in itertools.combinations(pos, 2):
        if distancia(a, b) < dist_min:
            pos.remove(b)
    return pos

def plot(img, contorno, pos):
    im = cv2.imread(img)
    cv2.drawContours(im,contornos,-1,(0,255,0),-1)
    for p in pos:
        plt.plot(p[0], p[1], 'o')
    plt.imshow(im)