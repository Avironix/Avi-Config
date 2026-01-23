!macro customInstall
  DetailPrint "Installing Drone Drivers..."
  ; Run the driver installer silently
  ExecWait '"$INSTDIR\resources\drivers\driver_setup.exe" /S'
!macroend