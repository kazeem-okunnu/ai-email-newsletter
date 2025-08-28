"use client"
import { useSelectedElement } from '@/app/provider'
import React, { useEffect, useState } from 'react'
import InputField from './Settings/InputField'
import ColorPickerField from './Settings/ColorPickerField'
import InputStyleField from './Settings/InputStyleField'
import SliderField from './Settings/SliderField'
import TextAreaField from './Settings/TextAreaField'
import ToogleGroupField from './Settings/ToogleGroupField'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'
import DropdownField from './Settings/DropdownField'
import ImagePreview from './Settings/ImagePreview'


const TextAlignOptions = [
  {
    value: "left",
    icon: AlignLeft
  },
  {
    value: "center",
    icon: AlignCenter
  },
  {
    value: "right",
    icon: AlignRight
  }

]
export default function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement()
  const [element, setElement] = useState()
  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index])
  }, [selectedElement])
  const onHandleInputChange = (fieldName, value) => {
    const updatedData = { ...selectedElement }
    updatedData.layout[selectedElement.index][fieldName] = value
    setSelectedElement(updatedData)
  }
  const onHandleStyleChange = (fieldName, fieldValue) => {
    let updatedElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          style: {
            ...selectedElement?.layout[selectedElement?.index]?.style,
            [fieldName]: fieldValue
          }
        }
      }
    }
    setSelectedElement(updatedElement)
  }
  const onHandleOuterStyleChange = (fieldName, fieldValue) => {
    let updatedElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          outerStyle: {
            ...selectedElement?.layout[selectedElement?.index]?.outerStyle,
            [fieldName]: fieldValue
          }
        }
      }
    }
    setSelectedElement(updatedElement)
  }
  return (
    <div className='p-5 flex flex-col gap-4'>
      <h2 className='font-bold text-xl'>Settings</h2>
      {element?.imageUrl &&
        <ImagePreview label={"Image Preview"} value={element?.imageUrl}
          onHandleInputChange={(value) => onHandleInputChange("imageUrl", value)} />}

      {element?.content &&
        <TextAreaField label={"Text Content"} value={element?.content}
          onHandleInputChange={(value) => onHandleInputChange("content", value)} />}


      {element?.url &&
        <InputField label={"url"} value={element?.url}
          onHandleInputChange={(value) => onHandleInputChange("url", value)} />}

      {element?.style?.backgroundColor &&
        <ColorPickerField label="Background Color"
          value={element?.style?.backgroundColor}
          onHandleStyleChange={(value) => onHandleStyleChange("backgroundColor", value)}
        />
      }

      {element?.style?.color &&
        <ColorPickerField label="Text Colour"
          value={element?.style?.color}
          onHandleStyleChange={(value) => onHandleStyleChange("color", value)}
        />
      }

      {
        element?.style?.fontSize &&
        <InputStyleField label={"Font Size"} value={element?.style?.fontSize}
          onHandleStyleChange={(value) => onHandleStyleChange("fontSize", value)}
        />

      }

      {
        element?.style?.padding &&
        <InputStyleField label={"Padding"} value={element?.style?.padding}
          onHandleStyleChange={(value) => onHandleStyleChange("padding", value)}
        />

      }

      {
        element?.style?.borderRadius &&
        <SliderField label={"Border Radius"} value={element?.style?.borderRadius}

          onHandleStyleChange={(value) => onHandleStyleChange("borderRadius", value)}
        />

      }

      {
        element?.style?.width &&
        <SliderField label={"Width"} value={element?.style?.borderRadius}

          onHandleStyleChange={(value) => onHandleStyleChange("width", value)}
        />

      }
      {
        element?.style?.textAlign &&
        <ToogleGroupField label={"Text Align"} value={element?.style?.textAlign}
          options={TextAlignOptions}
          onHandleStyleChange={(value) => onHandleStyleChange("textAlign", value)}
        />
      }

      {
        element?.style?.fontWeight &&
        <DropdownField label={"Font Weight"} value={element?.style?.fontWeight}
          options={["normal", "bold"]}
          onHandleStyleChange={(value) => onHandleStyleChange("fontWeight", value)}
        />

      }
      <div>
        <h2 className='font-bold mb-2'>Outer Style</h2>
        {element?.outerStyle?.backgroundColor &&
          <ColorPickerField label="Background Color"
            value={element?.style?.backgroundColor}
            onHandleStyleChange={(value) => onHandleOuterStyleChange("backgroundColor", value)}
          />
        }
      </div>

    </div>
  )
}
