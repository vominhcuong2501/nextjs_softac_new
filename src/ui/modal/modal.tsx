import { CloseIcon } from '@/svg'
import React from 'react'

interface ModalProps {
    children?: React.ReactNode
    className?: string
    isOpen?: boolean
    handleClose?: () => void
    isIconClose?: boolean
}

export const Modal = ({ children, className, isOpen, handleClose, isIconClose = true }: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div
                    className='fixed inset-0 w-screen h-screen bg-black-11 z-[11] cursor-pointer'
                    title='Close'
                    onClick={handleClose}
                ></div>
            )}
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[12] transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-0'
                    } ${className}`}
            >
                {isIconClose && isOpen && (
                    <CloseIcon
                        className='fixed top-0 -right-14 cursor-pointer z-[6] fill-white w-7 h-7 hover:fill-theme-3 transition-all duration-200'
                        onClick={handleClose}
                    />
                )}
                {children}
            </div>
        </>
    )
}
