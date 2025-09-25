/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion } from 'motion/react'
import React from 'react'

const effectVariants = {
    // =========================
    // Fade Effect: Fade effect, appear/disappear.
    // =========================
    none: {},
    fadeIn: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInUp: {
        initial: { y: 40, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInRight: {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInFormLeft: {
        initial: { x: -50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInFormRight: {
        initial: { x: 50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInCustom: {
        animate: {
            opacity: [0.2, 1, 0.2]
        },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },
    flash: {
        animate: { opacity: [1, 0, 1, 0, 1] },
        transition: { duration: 1, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }
    },
    fadeInDownBig: {
        initial: { opacity: 0, y: -2000 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    },
    fadeInLeftBig: {
        initial: { opacity: 0, x: -2000 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    },
    fadeInRightBig: {
        initial: { opacity: 0, x: 2000 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    },
    fadeInUpBig: {
        initial: { opacity: 0, y: 2000 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    },
    fadeOut: {
        animate: { opacity: 0, transition: { duration: 0.8 } }
    },
    fadeOutDown: {
        animate: { opacity: 0, y: 20, transition: { duration: 0.8 } }
    },
    fadeOutDownBig: {
        animate: { opacity: 0, y: 2000, transition: { duration: 0.8 } }
    },
    fadeOutLeft: {
        animate: { opacity: 0, x: -20, transition: { duration: 0.8 } }
    },
    fadeOutLeftBig: {
        animate: { opacity: 0, x: -2000, transition: { duration: 0.8 } }
    },
    fadeOutRight: {
        animate: { opacity: 0, x: 20, transition: { duration: 0.8 } }
    },
    fadeOutRightBig: {
        animate: { opacity: 0, x: 2000, transition: { duration: 0.8 } }
    },
    fadeOutUp: {
        animate: { opacity: 0, y: -20, transition: { duration: 0.8 } }
    },
    fadeOutUpBig: {
        animate: { opacity: 0, y: -2000, transition: { duration: 0.8 } }
    },

    // =========================
    // Bounce & Jump Effect: Bounce up/down effect.
    // =========================
    jump: {
        animate: { y: [0, 50, 0] },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },
    jumpTwo: {
        animate: { y: [0, 20, 0] },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },
    jumpThree: {
        animate: { y: [0, -20, 0] },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },
    jumpFour: {
        animate: { y: [0, -10, 0] },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    jumpFive: {
        animate: { y: [0, 10, 0] },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    jump5p: {
        animate: { y: [0, 5, 0] },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },
    jump5pRsv: {
        animate: { y: [0, -5, 0] },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },
    bounceIn: {
        initial: { opacity: 0, scale: 0.3 },
        animate: [
            { opacity: 1, scale: 1.05, transition: { duration: 0.5 } },
            { scale: 0.9, transition: { duration: 0.2 } },
            { scale: 1, transition: { duration: 0.3 } }
        ]
    },
    bounceInDown: {
        initial: { opacity: 0, y: -2000 },
        animate: [
            { opacity: 1, y: 30, transition: { duration: 0.6 } },
            { y: -10, transition: { duration: 0.2 } },
            { y: 0, transition: { duration: 0.2 } }
        ]
    },
    bounceInLeft: {
        initial: { opacity: 0, x: -2000 },
        animate: [
            { opacity: 1, x: 30, transition: { duration: 0.6 } },
            { x: -10, transition: { duration: 0.2 } },
            { x: 0, transition: { duration: 0.2 } }
        ]
    },
    bounceInRight: {
        initial: { opacity: 0, x: 2000 },
        animate: [
            { opacity: 1, x: -30, transition: { duration: 0.6 } },
            { x: 10, transition: { duration: 0.2 } },
            { x: 0, transition: { duration: 0.2 } }
        ]
    },
    bounceInUp: {
        initial: { opacity: 0, y: 2000 },
        animate: [
            { opacity: 1, y: -30, transition: { duration: 0.6 } },
            { y: 10, transition: { duration: 0.2 } },
            { y: 0, transition: { duration: 0.2 } }
        ]
    },
    bounceOut: {
        animate: [
            { scale: 0.95, transition: { duration: 0.25 } },
            { opacity: 1, scale: 1.1, transition: { duration: 0.25 } },
            { opacity: 0, scale: 0.3, transition: { duration: 0.5 } }
        ]
    },
    bounceOutDown: {
        animate: [
            { y: -20, transition: { duration: 0.2 } },
            { opacity: 0, y: 2000, transition: { duration: 0.8 } }
        ]
    },
    bounceOutLeft: {
        animate: [
            { x: 20, transition: { duration: 0.2 } },
            { opacity: 0, x: -2000, transition: { duration: 0.8 } }
        ]
    },
    bounceOutRight: {
        animate: [
            { x: -20, transition: { duration: 0.2 } },
            { opacity: 0, x: 2000, transition: { duration: 0.8 } }
        ]
    },
    bounceOutUp: {
        animate: [
            { y: 20, transition: { duration: 0.2 } },
            { opacity: 0, y: -2000, transition: { duration: 0.8 } }
        ]
    },

    // =========================
    // Scale & Pulse Effect: Zoom in/out, pulse effect.
    // =========================
    scaleUpOne: {
        animate: { scale: [1, 0.85, 1] },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    scaleUpTwo: {
        animate: { scale: [0.5, 0.8, 0.5] },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },
    scaleUpThree: {
        animate: { scale: [1, 2, 1] },
        transition: { duration: 1, times: [0, 0.4, 1], repeat: Infinity }
    },

    // =========================
    // Rotate Effect: Rotate effect in all directions.
    // =========================
    rotated: {
        animate: { rotate: [0, 360] },
        transition: { duration: 1, repeat: Infinity, ease: 'linear' }
    },
    rotatedTwo: {
        animate: { rotate: [0, -360] },
        transition: { duration: 1, repeat: Infinity, ease: 'linear' }
    },
    rotatedHalf: {
        animate: { rotate: [0, 90, 0] },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    rotatedHalfTwo: {
        animate: { rotate: [-90, 90] },
        transition: { duration: 1, repeat: Infinity }
    },
    rotateIn: {
        initial: { opacity: 0, rotate: -200 },
        animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
    },
    rotateOut: {
        animate: { opacity: 0, rotate: 200, transition: { duration: 0.8 } }
    },
    rotateInDownLeft: {
        initial: { opacity: 0, rotate: -90, transformOrigin: 'left bottom' },
        animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
    },
    rotateInDownRight: {
        initial: { opacity: 0, rotate: 90, transformOrigin: 'right bottom' },
        animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
    },
    rotateInUpLeft: {
        initial: { opacity: 0, rotate: 90, transformOrigin: 'left bottom' },
        animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
    },
    rotateInUpRight: {
        initial: { opacity: 0, rotate: -90, transformOrigin: 'right bottom' },
        animate: { opacity: 1, rotate: 0, transition: { duration: 0.8 } }
    },
    rotateOutDownLeft: {
        animate: { opacity: 0, rotate: 90, transformOrigin: 'left bottom', transition: { duration: 0.8 } }
    },
    rotateOutDownRight: {
        animate: { opacity: 0, rotate: -90, transformOrigin: 'right bottom', transition: { duration: 0.8 } }
    },
    rotateOutUpLeft: {
        animate: { opacity: 0, rotate: -90, transformOrigin: 'left bottom', transition: { duration: 0.8 } }
    },
    rotateOutUpRight: {
        animate: { opacity: 0, rotate: 90, transformOrigin: 'right bottom', transition: { duration: 0.8 } }
    },

    // =========================
    // Flip Effect: 3D flip effect.
    // =========================
    flip: {
        animate: [
            { rotateY: 0, scale: 1, opacity: 1, transition: { duration: 0.2 } },
            { rotateY: 170, scale: 1, opacity: 1, transition: { duration: 0.2 } },
            { rotateY: 190, scale: 1, opacity: 1, transition: { duration: 0.1 } },
            { rotateY: 360, scale: 0.95, opacity: 1, transition: { duration: 0.3 } },
            { rotateY: 360, scale: 1, opacity: 1, transition: { duration: 0.2 } }
        ],
        style: { backfaceVisibility: 'visible' }
    },
    flipInX: {
        initial: { opacity: 0, rotateX: 90 },
        animate: { opacity: 1, rotateX: 0, transition: { duration: 0.8 } }
    },
    flipInY: {
        initial: { opacity: 0, rotateY: 90 },
        animate: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } }
    },
    flipOutX: {
        animate: { opacity: 0, rotateX: 90, transition: { duration: 0.8 } }
    },
    flipOutY: {
        animate: { opacity: 0, rotateY: 90, transition: { duration: 0.8 } }
    },

    // =========================
    // Skew & LightSpeed ​​Effect: Tilt/tilt, light speed effect.
    // =========================
    lightSpeedIn: {
        initial: { opacity: 0, x: '100%', skewX: -30 },
        animate: [
            { opacity: 1, x: '-20%', skewX: 30, transition: { duration: 0.6 } },
            { x: '0%', skewX: -15, transition: { duration: 0.2 } },
            { x: '0%', skewX: 0, transition: { duration: 0.2 } }
        ]
    },
    lightSpeedOut: {
        animate: { opacity: 0, x: '100%', skewX: -30, transition: { duration: 0.8 } }
    },

    // =========================
    // Wobble, Shake, Swing, Tada Effect: Vibrate, shake, shake hard, shake lightly.
    // =========================
    shake: {
        animate: { x: [0, -10, 10, -10, 10, -10, 10, 0] },
        transition: { duration: 0.8, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1], repeat: Infinity }
    },
    swing: {
        animate: { rotate: [0, 15, -10, 5, -5, 0] },
        transition: { duration: 1, times: [0, 0.2, 0.4, 0.6, 0.8, 1], repeat: Infinity }
    },
    tada: {
        animate: {
            scale: [1, 0.9, 1.1, 1.1, 1, 1.1, 1, 1],
            rotate: [0, -3, 3, -3, 3, 0, 0, 0]
        },
        transition: { duration: 1, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1], repeat: Infinity }
    },
    wobble: {
        animate: {
            x: [0, -25, 20, -15, 10, -5, 0],
            rotate: [0, -5, 3, -3, 2, -1, 0]
        },
        transition: { duration: 1, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1], repeat: Infinity }
    },

    // =========================
    // Zoom Effect: Zoom in/out effect.
    // =========================
    zoomIn: {
        initial: { opacity: 0, scale: 0.3 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
    },
    zoomOut: {
        animate: { opacity: 0, scale: 0.3, transition: { duration: 0.8 } }
    },
    zoomInDown: {
        initial: { opacity: 0, scale: 0.1, y: -1000 },
        animate: [
            { opacity: 1, scale: 0.475, y: 60, transition: { duration: 0.6 } },
            { scale: 1, y: 0, transition: { duration: 0.2 } }
        ]
    },
    zoomInLeft: {
        initial: { opacity: 0, scale: 0.1, x: -1000 },
        animate: [
            { opacity: 1, scale: 0.475, x: 10, transition: { duration: 0.6 } },
            { scale: 1, x: 0, transition: { duration: 0.2 } }
        ]
    },
    zoomInRight: {
        initial: { opacity: 0, scale: 0.1, x: 1000 },
        animate: [
            { opacity: 1, scale: 0.475, x: -10, transition: { duration: 0.6 } },
            { scale: 1, x: 0, transition: { duration: 0.2 } }
        ]
    },
    zoomInUp: {
        initial: { opacity: 0, scale: 0.1, y: 1000 },
        animate: [
            { opacity: 1, scale: 0.475, y: -60, transition: { duration: 0.6 } },
            { scale: 1, y: 0, transition: { duration: 0.2 } }
        ]
    },
    zoomOutDown: {
        animate: [
            { opacity: 1, scale: 0.475, y: -60, transition: { duration: 0.4 } },
            { opacity: 0, scale: 0.1, y: 2000, transition: { duration: 0.6 } }
        ]
    },
    zoomOutLeft: {
        animate: [
            { opacity: 1, scale: 0.475, x: 42, transition: { duration: 0.4 } },
            { opacity: 0, scale: 0.1, x: -2000, transition: { duration: 0.6 } }
        ]
    },
    zoomOutRight: {
        animate: [
            { opacity: 1, scale: 0.475, x: -42, transition: { duration: 0.4 } },
            { opacity: 0, scale: 0.1, x: 2000, transition: { duration: 0.6 } }
        ]
    },
    zoomOutUp: {
        animate: [
            { opacity: 1, scale: 0.475, y: 60, transition: { duration: 0.4 } },
            { opacity: 0, scale: 0.1, y: -2000, transition: { duration: 0.6 } }
        ]
    },

    // =========================
    // Slide Effect: Slide effect in all directions.
    // =========================
    slideInDown: {
        initial: { opacity: 0, y: -2000 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    },
    slideInLeft: {
        initial: { opacity: 0, x: -2000 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    },
    slideInRight: {
        initial: { opacity: 0, x: 2000 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    },
    slideOutLeft: {
        animate: { opacity: 0, x: -2000, transition: { duration: 0.8 } }
    },
    slideOutRight: {
        animate: { opacity: 0, x: 2000, transition: { duration: 0.8 } }
    },
    slideOutUp: {
        animate: { opacity: 0, y: -2000, transition: { duration: 0.8 } }
    },

    // =========================
    // Roll & Hinge Effect: Roll, Hinge effect.
    // =========================
    hinge: {
        animate: [
            { rotate: 80, originX: 0, originY: 0, transition: { duration: 0.2 } },
            { rotate: 60, originX: 0, originY: 0, transition: { duration: 0.2 } },
            { rotate: 60, y: 0, opacity: 1, originX: 0, originY: 0, transition: { duration: 0.2 } },
            { y: 700, opacity: 0, transition: { duration: 0.8 } }
        ]
    },
    rollIn: {
        initial: { opacity: 0, x: '-100%', rotate: -120 },
        animate: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8 } }
    },
    rollOut: {
        animate: { opacity: 0, x: '100%', rotate: 120, transition: { duration: 0.8 } }
    },

    // =========================
    // Misc & Custom Effect: Special, custom effect.
    // =========================
    prXOne: {
        animate: { x: [0, -15, 0] },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    prXTwo: {
        animate: { x: [0, 15, 0] },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    scaleRight: {
        animate: { x: ['0%', '20%', '0%'] },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    moveclouds: {
        animate: { marginLeft: [200, -200] },
        transition: { duration: 2, repeat: Infinity, ease: 'linear' }
    },
    moveclouds2: {
        animate: { marginRight: [200, -200] },
        transition: { duration: 2, repeat: Infinity, ease: 'linear' }
    },
    moveUp: {
        animate: { y: ['0%', '-70%'] },
        transition: { duration: 1, repeat: Infinity }
    },
    rippleOut: {
        animate: {
            top: ['-5px', '-15px', '-5px'],
            right: ['-5px', '-15px', '-5px'],
            bottom: ['-5px', '-15px', '-5px'],
            left: ['-5px', '-15px', '-5px'],
            opacity: [1, 0.8, 1]
        },
        transition: { duration: 1, times: [0, 0.5, 1], repeat: Infinity }
    },
    rippleOutTwo: {
        animate: {
            top: ['0px', '-30px'],
            right: ['0px', '-30px'],
            bottom: ['0px', '-30px'],
            left: ['0px', '-30px'],
            opacity: [1, 0]
        },
        transition: { duration: 1, times: [0, 1], repeat: Infinity }
    },
    sectionStroke: {
        animate: { strokeDashoffset: [560, 0, -560] },
        transition: { duration: 2, times: [0, 0.5, 1], repeat: Infinity }
    },
    borderAnimate2: {
        animate: { scale: [0.8, 2.5], opacity: [1, 0] },
        transition: { duration: 2, times: [0, 1], repeat: Infinity }
    },
    lightOne: {
        animate: { opacity: [1, 0.4, 0.6, 0.8, 1] },
        transition: { duration: 2, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }
    },

    // =========================
    // Custom Fade/Slide Effect (tp prefix): Custom fade/slide effect.
    // =========================
    tpfadeUp: {
        initial: { opacity: 0, y: 90 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    tpfadeLeft: {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    tpfadeRight: {
        initial: { opacity: 0, x: 100 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    tpfadeIn: {
        initial: { opacity: 0, y: -50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    tpfadeInDown: {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },

    // =========================
    // Sticky Scroll Effect: Sticky effect when scrolling.
    // =========================
    scrollSticky: {
        variants: { hidden: { y: 100, opacity: 0, scale: 0.95 }, visible: { y: 0, opacity: 1, scale: 1 } },
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: false, amount: 0.3 },
        transition: { duration: 0.6, ease: 'easeOut' }
    },

    // =========================
    // Side In/Out Effect: Side In/Out slide effect.
    // =========================
    easeInSideOut: {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
            mass: 0.6,
            restDelta: 0.01,
            restSpeed: 2
        }
    }
}

export type MotionEffects = keyof typeof effectVariants

export const Motion = ({
    tag = 'div',
    effect = 'none',
    children,
    ...props
}: {
    tag?: string
    effect?: MotionEffects | 'none'
    children?: React.ReactNode
    [key: string]: any
}) => {
    const MotionTag = (motion[tag as keyof typeof motion] || motion.div) as React.ElementType

    const effectProps = effectVariants[effect as MotionEffects] || {}

    return (
        <MotionTag {...effectProps} {...props}>
            {children}
        </MotionTag>
    )
}
