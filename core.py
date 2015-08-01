import cv2
import numpy as np
import matplotlib.pyplot as plt
%matplotlib inline

from __future__ import print_function

def filtro_contornos_chicos(contuors, dim_min_contuor):
    """Da un nuevo contorno donde sus elementos son mas grandes que dim_min_contuor"""
    new_contuors = []
    for contuor in contuors:
        if len(contuor) > dim_min_contuor:
            new_contuors.append(contuor)
    return new_contuors

def contar_contornos(img, thresh_min, thresh_max, dim_min_contuor, plot=False):
    im = cv2.imread(img)
    imgray = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)
    ret,thresh = cv2.threshold(imgray, thresh_min, thresh_max,0)
    contours, hierarchy = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
    new_contuors = filtro_contornos_chicos(contours, dim_min_contuor)
    if plot:
        cv2.drawContours(im,new_contuors,-1,(0,255,0),-1)
        plt.imshow(im)
        plt.show()
    return len(new_contuors)