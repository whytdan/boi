import React, {useContext, useEffect, useState} from 'react';
import {DropzoneDialog} from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import {Typography, Link} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { LanguageContext } from '../../App';


export default function FileDropzone(props) {

  const [open, setOpen] = useState(false);
  const [currentFileNames, setCurrentFileNames] = useState(props.value);
  const langState = useContext(LanguageContext);
  
  if(props.isSubmitted && currentFileNames.length !== 0){
    setCurrentFileNames([])
  }

  return (
    <div
      style={{marginTop: '20px'}}
    >
      <Button 
        variant="contained" 
        color="primary"
        style={{marginBottom: '15px'}}
        onClick={() => setOpen(true)}>
        {
          langState.lang === 'ru' ? 'Добавить файл(ы)' :
          langState.lang === 'kg' ? 'Файлдарды кошуу' :
          'Add file(s)'
        }
      </Button>

      <DropzoneDialog
        dropzoneText={`${
          langState.lang === 'ru' ? 'Выберите или перетащите файл' :
          langState.lang === 'kg' ? 'Файлды тандаңыз же сүйрөңүз' : 
          'Select or drag a file'
        }`}
        dialogTitle={`${
          langState.lang === 'ru' ? 'Загрузить файл' :
          langState.lang === 'kg' ? 'Файлды жүктөө' :
          'Upload file'
        }`}
        cancelButtonText={`${
          langState.lang === 'ru' ? 'Отмена' :
          langState.lang === 'kg' ? 'Жокко чыгаруу' : 
          'Cancel'
        }`}
        submitButtonText={`${
          langState.lang === 'ru' ? 'Загрузить' :
          langState.lang === 'kg' ? 'Жүктөө' :
          'Upload'}`}
        previewText="Файл(ы): "
        maxFileSize={5000000}
        filesLimit={5}
        open={open}
        alertSnackbarProps={{message: 'bazar jok!'}}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          props.setFieldValue(props.name, files)
          setOpen(false);
        }}
        showPreviews={true}
        showAlerts={false}
        showFileNamesInPreview={true}
        getFileAddedMessage={(fileName) => setCurrentFileNames([...currentFileNames, fileName])}
      />

      {
        props.existingFileLink && typeof props.existingFileLink === 'string' ?
          <span></span>
          : 
          currentFileNames.map((link, index) => (
          <div style={{display: "flex", marginBottom: 15}} key={index}>
          <Typography className="mt-2" color="textSecondary">
            {link.length > 30 ? link.substring(0, 29) + "..." : link}
          </Typography>
          <CloseIcon style={{cursor: "pointer"}} onClick={() => {
            setCurrentFileNames(currentFileNames.filter((_, fileIndex) => index !== fileIndex));
          }}/>
          </div>
        ))
      }
    </div>
  );
}
