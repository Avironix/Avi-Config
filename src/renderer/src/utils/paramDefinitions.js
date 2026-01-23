/**
 * AUTO-GENERATED DATABASE (CLEANED)
 * Source: https://autotest.ardupilot.org/Parameters/ArduCopter/apm.pdef.xml
 * Count: 5877 parameters
 * Date: 2026-01-23T05:56:26.589Z
 */

export const PARAM_DEFINITIONS = {
  "FORMAT_VERSION": {
    "desc": "Eeprom format version number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PILOT_THR_FILT": {
    "desc": "Throttle filter cutoff",
    "range": "0 - 10",
    "default": "0",
    "unit": "Hz"
  },
  "PILOT_TKOFF_ALT": {
    "desc": "Pilot takeoff altitude",
    "range": "0.0 - 1000.0",
    "default": "0",
    "unit": "cm"
  },
  "PILOT_THR_BHV": {
    "desc": "Throttle stick behavior [Bitmask: 0:Feedback from mid stick,1:High throttle cancels landing,2:Disarm on land detection]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GCS_PID_MASK": {
    "desc": "GCS PID tuning mask [Bitmask: 0:Roll,1:Pitch,2:Yaw,3:AccelZ]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RTL_ALT": {
    "desc": "RTL Altitude",
    "range": "30 - 300000",
    "default": "0",
    "unit": "cm"
  },
  "RTL_CONE_SLOPE": {
    "desc": "RTL cone slope",
    "range": "0 - 10.0",
    "default": "0",
    "unit": ""
  },
  "RTL_SPEED": {
    "desc": "RTL speed",
    "range": "0 - 2000",
    "default": "0",
    "unit": "cm/s"
  },
  "RTL_ALT_FINAL": {
    "desc": "RTL Final Altitude",
    "range": "0 - 1000",
    "default": "0",
    "unit": "cm"
  },
  "RTL_CLIMB_MIN": {
    "desc": "RTL minimum climb",
    "range": "0 - 3000",
    "default": "0",
    "unit": "cm"
  },
  "RTL_LOIT_TIME": {
    "desc": "RTL loiter time",
    "range": "0 - 60000",
    "default": "0",
    "unit": "ms"
  },
  "RTL_ALT_TYPE": {
    "desc": "RTL mode altitude type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_GCS_ENABLE": {
    "desc": "Ground Station Failsafe Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_HDOP_GOOD": {
    "desc": "GPS Hdop Good",
    "range": "100 - 900",
    "default": "0",
    "unit": ""
  },
  "SUPER_SIMPLE": {
    "desc": "Super Simple Mode [Bitmask: 0:SwitchPos1, 1:SwitchPos2, 2:SwitchPos3, 3:SwitchPos4, 4:SwitchPos5, 5:SwitchPos6]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WP_YAW_BEHAVIOR": {
    "desc": "Yaw behaviour during missions",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LAND_SPEED": {
    "desc": "Land speed",
    "range": "30 - 200",
    "default": "0",
    "unit": "cm/s"
  },
  "LAND_SPEED_HIGH": {
    "desc": "Land speed high",
    "range": "0 - 500",
    "default": "0",
    "unit": "cm/s"
  },
  "PILOT_SPEED_UP": {
    "desc": "Pilot maximum vertical speed ascending",
    "range": "50 - 500",
    "default": "0",
    "unit": "cm/s"
  },
  "PILOT_ACCEL_Z": {
    "desc": "Pilot vertical acceleration",
    "range": "50 - 500",
    "default": "0",
    "unit": "cm/s/s"
  },
  "FS_THR_ENABLE": {
    "desc": "Throttle Failsafe Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_THR_VALUE": {
    "desc": "Throttle Failsafe Value",
    "range": "910 - 1100",
    "default": "0",
    "unit": "PWM"
  },
  "THR_DZ": {
    "desc": "Throttle deadzone",
    "range": "0 - 300",
    "default": "0",
    "unit": "PWM"
  },
  "FLTMODE1": {
    "desc": "Flight Mode 1",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLTMODE2": {
    "desc": "Flight Mode 2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLTMODE3": {
    "desc": "Flight Mode 3",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLTMODE4": {
    "desc": "Flight Mode 4",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLTMODE5": {
    "desc": "Flight Mode 5",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLTMODE6": {
    "desc": "Flight Mode 6",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLTMODE_CH": {
    "desc": "Flightmode channel",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INITIAL_MODE": {
    "desc": "Initial flight mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIMPLE": {
    "desc": "Simple mode bitmask [Bitmask: 0:SwitchPos1, 1:SwitchPos2, 2:SwitchPos3, 3:SwitchPos4, 4:SwitchPos5, 5:SwitchPos6]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LOG_BITMASK": {
    "desc": "Log bitmask [Bitmask: 0:Fast Attitude,1:Medium Attitude,2:GPS,3:System Performance,4:Control Tuning,5:Navigation Tuning,6:RC input,7:IMU,8:Mission Commands,9:Battery Monitor,10:RC output,11:Optical Flow,12:PID,13:Compass,15:Camera,17:Motors,18:Fast IMU,19:Raw IMU,20:Video Stabilization,21:Fast harmonic notch logging]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ESC_CALIBRATION": {
    "desc": "ESC Calibration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TUNE": {
    "desc": "Tuning Parameter",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FRAME_TYPE": {
    "desc": "Frame Type (+, X, V, etc)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DISARM_DELAY": {
    "desc": "Disarm delay",
    "range": "0 - 127",
    "default": "0",
    "unit": "s"
  },
  "ANGLE_MAX": {
    "desc": "Angle Max",
    "range": "1000 - 8000",
    "default": "0",
    "unit": "cdeg"
  },
  "PHLD_BRAKE_RATE": {
    "desc": "PosHold braking rate",
    "range": "4 - 12",
    "default": "0",
    "unit": "deg/s"
  },
  "PHLD_BRAKE_ANGLE": {
    "desc": "PosHold braking angle max",
    "range": "2000 - 4500",
    "default": "0",
    "unit": "cdeg"
  },
  "LAND_REPOSITION": {
    "desc": "Land repositioning",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_EKF_ACTION": {
    "desc": "EKF Failsafe Action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_EKF_THRESH": {
    "desc": "EKF failsafe variance threshold",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "FS_CRASH_CHECK": {
    "desc": "Crash check enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC_SPEED": {
    "desc": "ESC Update Speed",
    "range": "50 - 490",
    "default": "0",
    "unit": "Hz"
  },
  "ACRO_BAL_ROLL": {
    "desc": "Acro Balance Roll",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "ACRO_BAL_PITCH": {
    "desc": "Acro Balance Pitch",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "ACRO_TRAINER": {
    "desc": "Acro Trainer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "THROW_MOT_START": {
    "desc": "Start motors before throwing is detected",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "THROW_ALT_MIN": {
    "desc": "Throw mode minimum altitude",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "THROW_ALT_MAX": {
    "desc": "Throw mode maximum altitude",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "THROW_ALT_DCSND": {
    "desc": "Throw mode target altitude to descend",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "THROW_ALT_ACSND": {
    "desc": "Throw mode target altitude to ascsend",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "WP_NAVALT_MIN": {
    "desc": "Waypoint navigation altitude minimum",
    "range": "0 - 5",
    "default": "0",
    "unit": "m"
  },
  "THROW_NEXTMODE": {
    "desc": "Throw mode's follow up mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "THROW_TYPE": {
    "desc": "Type of Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GND_EFFECT_COMP": {
    "desc": "Ground Effect Compensation Enable/Disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DEV_OPTIONS": {
    "desc": "Development options [Bitmask: 0:ADSBMavlinkProcessing,1:DevOptionVFR_HUDRelativeAlt]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ACRO_THR_MID": {
    "desc": "Acro Thr Mid",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FRAME_CLASS": {
    "desc": "Frame Class",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PILOT_SPEED_DN": {
    "desc": "Pilot maximum vertical speed descending",
    "range": "0 - 500",
    "default": "0",
    "unit": "cm/s"
  },
  "LAND_ALT_LOW": {
    "desc": "Land alt low",
    "range": "100 - 10000",
    "default": "0",
    "unit": "cm"
  },
  "TUNE_MIN": {
    "desc": "Tuning minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TUNE_MAX": {
    "desc": "Tuning maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_VIBE_ENABLE": {
    "desc": "Vibration Failsafe enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_OPTIONS": {
    "desc": "Failsafe options bitmask [Bitmask: 0:Continue if in Auto on RC failsafe, 1:Continue if in Auto on GCS failsafe, 2:Continue if in Guided on RC failsafe, 3:Continue if landing on any failsafe, 4:Continue if in pilot controlled modes on GCS failsafe, 5:Release Gripper]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ACRO_OPTIONS": {
    "desc": "Acro mode options [Bitmask: 0:Air-mode,1:Rate Loop Only]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AUTO_OPTIONS": {
    "desc": "Auto mode options [Bitmask: 0:Allow Arming,1:Allow Takeoff Without Raising Throttle,2:Ignore pilot yaw,7:Allow weathervaning]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GUID_OPTIONS": {
    "desc": "Guided mode options [Bitmask: 0:Allow Arming from Transmitter,2:Ignore pilot yaw,3:SetAttitudeTarget interprets Thrust As Thrust,4:Do not stabilize PositionXY,5:Do not stabilize VelocityXY,6:Waypoint navigation used for position targets,7:Allow weathervaning]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_GCS_TIMEOUT": {
    "desc": "GCS failsafe timeout",
    "range": "2 - 120",
    "default": "0",
    "unit": "s"
  },
  "RTL_OPTIONS": {
    "desc": "RTL mode options [Bitmask: 2:Ignore pilot yaw]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLIGHT_OPTIONS": {
    "desc": "Flight mode options [Bitmask: 0:Disable thrust loss check, 1:Disable yaw imbalance warning, 2:Release gripper on thrust loss]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND_FILT": {
    "desc": "Rangefinder filter",
    "range": "0 - 5",
    "default": "0",
    "unit": "Hz"
  },
  "GUID_TIMEOUT": {
    "desc": "Guided mode timeout",
    "range": "0.1 - 5",
    "default": "0",
    "unit": "s"
  },
  "SURFTRAK_MODE": {
    "desc": "Surface Tracking Mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_DR_ENABLE": {
    "desc": "DeadReckon Failsafe Action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FS_DR_TIMEOUT": {
    "desc": "DeadReckon Failsafe Timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": ""
  },
  "ACRO_RP_RATE": {
    "desc": "Acro Roll and Pitch Rate",
    "range": "1 - 1080",
    "default": "0",
    "unit": "deg/s"
  },
  "ACRO_RP_EXPO": {
    "desc": "Acro Roll/Pitch Expo",
    "range": "-0.5 - 0.95",
    "default": "0",
    "unit": ""
  },
  "ACRO_RP_RATE_TC": {
    "desc": "Acro roll/pitch rate control input time constant",
    "range": "0 - 1",
    "default": "0",
    "unit": "s"
  },
  "ACRO_Y_RATE": {
    "desc": "Acro Yaw Rate",
    "range": "1 - 360",
    "default": "0",
    "unit": "deg/s"
  },
  "ACRO_Y_EXPO": {
    "desc": "Acro Yaw Expo",
    "range": "-1.0 - 0.95",
    "default": "0",
    "unit": ""
  },
  "ACRO_Y_RATE_TC": {
    "desc": "Acro yaw rate control input time constant",
    "range": "0 - 1",
    "default": "0",
    "unit": "s"
  },
  "PILOT_Y_RATE": {
    "desc": "Pilot controlled yaw rate",
    "range": "1 - 360",
    "default": "0",
    "unit": "deg/s"
  },
  "PILOT_Y_EXPO": {
    "desc": "Pilot controlled yaw expo",
    "range": "-0.5 - 1.0",
    "default": "0",
    "unit": ""
  },
  "PILOT_Y_RATE_TC": {
    "desc": "Pilot yaw rate control input time constant",
    "range": "0 - 1",
    "default": "0",
    "unit": "s"
  },
  "TKOFF_SLEW_TIME": {
    "desc": "Slew time of throttle during take-off",
    "range": "0.25 - 5.0",
    "default": "0",
    "unit": "s"
  },
  "TKOFF_RPM_MIN": {
    "desc": "Takeoff Check RPM minimum",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "PLDP_THRESH": {
    "desc": "Payload Place thrust ratio threshold",
    "range": "0.5 - 0.9",
    "default": "0",
    "unit": ""
  },
  "PLDP_RNG_MAX": {
    "desc": "Payload Place maximum range finder altitude",
    "range": "0 - 100",
    "default": "0",
    "unit": "m"
  },
  "PLDP_DELAY": {
    "desc": "Payload Place climb delay",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "PLDP_SPEED_DN": {
    "desc": "Payload Place decent speed",
    "range": "0 - 5",
    "default": "0",
    "unit": "m/s"
  },
  "SURFTRAK_TC": {
    "desc": "Surface Tracking Filter Time Constant",
    "range": "0 - 5",
    "default": "0",
    "unit": "s"
  },
  "TKOFF_THR_MAX": {
    "desc": "Takeoff maximum throttle during take-off ramp up",
    "range": "0.0 - 0.9",
    "default": "0",
    "unit": ""
  },
  "TKOFF_RPM_MAX": {
    "desc": "Takeoff Check RPM maximum",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "FS_EKF_FILT": {
    "desc": "EKF Failsafe filter cutoff",
    "range": "0 - 10",
    "default": "0",
    "unit": "Hz"
  },
  "FSTRATE_ENABLE": {
    "desc": "Enable the fast Rate thread",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FSTRATE_DIV": {
    "desc": "Fast rate thread divisor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "TUNE2_MIN": {
    "desc": "Tuning minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TUNE2_MAX": {
    "desc": "Tuning maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TUNE2": {
    "desc": "Tuning Parameter for TRANSMITTER_TUNE2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLTMODE_GCSBLOCK": {
    "desc": "Flight mode block from GCS [Bitmask: 0:Stabilize,1:Acro,2:AltHold,3:Auto,4:Guided,5:Loiter,6:Circle,7:Drift,8:Sport,9:Flip,10:AutoTune,11:PosHold,12:Brake,13:Throw,14:Avoid_ADSB,15:Guided_NoGPS,16:Smart_RTL,17:FlowHold,18:Follow,19:ZigZag,20:SystemID,21:Heli_Autorotate,22:Auto RTL,23:Turtle]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VID1_CAMMODEL": {
    "desc": "Camera1 Video Stream Camera Model",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VID1_ID": {
    "desc": "Camera1 Video Stream Id",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "VID1_TYPE": {
    "desc": "Camera1 Video Stream Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VID1_FLAG": {
    "desc": "Camera1 Video Stream Flags [Bitmask: 0:Running,1:Thermal,2:Thermal Range Enabled]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VID1_FRAME_RATE": {
    "desc": "Camera1 Video Stream Frame Rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "VID1_HRES": {
    "desc": "Camera1 Video Stream Horizontal Resolution",
    "range": "0 - 4096",
    "default": "0",
    "unit": ""
  },
  "VID1_VRES": {
    "desc": "Camera1 Video Stream Vertical Resolution",
    "range": "0 - 4096",
    "default": "0",
    "unit": ""
  },
  "VID1_BITRATE": {
    "desc": "Camera1 Video Stream Bitrate",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "VID1_HFOV": {
    "desc": "Camera1 Video Stream Horizontal FOV",
    "range": "0 - 360",
    "default": "0",
    "unit": ""
  },
  "VID1_ENCODING": {
    "desc": "Camera1 Video Stream Encoding",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VID1_IPADDR0": {
    "desc": "Camera1 Video Stream IP Address 0",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "VID1_IPADDR1": {
    "desc": "Camera1 Video Stream IP Address 1",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "VID1_IPADDR2": {
    "desc": "Camera1 Video Stream IP Address 2",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "VID1_IPADDR3": {
    "desc": "Camera1 Video Stream IP Address 3",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "VID1_IPPORT": {
    "desc": "Camera1 Video Stream IP Address Port",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "BTAG_ENABLE": {
    "desc": "enable battery info support",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTAG_MAX_CYCLES": {
    "desc": "max battery cycles",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "BTAG_CUR_CYCLES": {
    "desc": "current battery cycles",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "FOLT_ENABLE": {
    "desc": "Follow Target Send Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLT_MAV_CHAN": {
    "desc": "Follow Target Send MAVLink Channel",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "WINCH_RATE_UP": {
    "desc": "WinchControl Rate Up",
    "range": "0.1 - 5.0",
    "default": "0",
    "unit": ""
  },
  "WINCH_RATE_DN": {
    "desc": "WinchControl Rate Down",
    "range": "0.1 - 5.0",
    "default": "0",
    "unit": ""
  },
  "WINCH_RC_FUNC": {
    "desc": "Winch Rate Control RC function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_ALT_CUTOFF": {
    "desc": "Precland altitude cutoff",
    "range": "0 - 20",
    "default": "0",
    "unit": "m"
  },
  "DIST_CUTOFF": {
    "desc": "Precland distance cutoff",
    "range": "0 - 100",
    "default": "0",
    "unit": "m"
  },
  "SLUP_ENABLE": {
    "desc": "Slung Payload enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SLUP_VEL_P": {
    "desc": "Slung Payload Velocity P gain",
    "range": "0 - 0.8",
    "default": "0",
    "unit": ""
  },
  "SLUP_DIST_MAX": {
    "desc": "Slung Payload horizontal distance max",
    "range": "0 - 30",
    "default": "0",
    "unit": ""
  },
  "SLUP_SYSID": {
    "desc": "Slung Payload mavlink system id",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "SLUP_WP_POS_P": {
    "desc": "Slung Payload return to WP position P gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "SLUP_RESTOFS_TC": {
    "desc": "Slung Payload resting offset estimate filter time constant",
    "range": "1 - 20",
    "default": "0",
    "unit": ""
  },
  "SLUP_DEBUG": {
    "desc": "Slung Payload debug output",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "THR_KILL_FUNC": {
    "desc": "AUX function to kill engine",
    "range": "300 - 307",
    "default": "0",
    "unit": ""
  },
  "THR_KILL_PWM": {
    "desc": "PWM on kill active",
    "range": "800 - 2200",
    "default": "0",
    "unit": ""
  },
  "THR_KILL_CHAN": {
    "desc": "output channel to change on throttle kill",
    "range": "0 - 32",
    "default": "0",
    "unit": ""
  },
  "THR_KILL_VAL": {
    "desc": "auxilliary value to kill throttle",
    "range": "0 - 2",
    "default": "0",
    "unit": ""
  },
  "THR_KILL_DEF": {
    "desc": "throttle kill default value",
    "range": "0 - 2",
    "default": "0",
    "unit": ""
  },
  "CGA_RATIO": {
    "desc": "CoG adjustment ratio",
    "range": "0.5 - 2",
    "default": "0",
    "unit": ""
  },
  "RTUN_ENABLE": {
    "desc": "Rover Quicktune enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RTUN_AXES": {
    "desc": "Rover Quicktune axes [Bitmask: 0:Steering,1:Speed]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RTUN_STR_FFRATIO": {
    "desc": "Rover Quicktune Steering Rate FeedForward ratio",
    "range": "0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "RTUN_STR_P_RATIO": {
    "desc": "Rover Quicktune Steering FF to P ratio",
    "range": "0 - 2.0",
    "default": "0",
    "unit": ""
  },
  "RTUN_STR_I_RATIO": {
    "desc": "Rover Quicktune Steering FF to I ratio",
    "range": "0 - 2.0",
    "default": "0",
    "unit": ""
  },
  "RTUN_SPD_FFRATIO": {
    "desc": "Rover Quicktune Speed FeedForward (equivalent) ratio",
    "range": "0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "RTUN_SPD_P_RATIO": {
    "desc": "Rover Quicktune Speed FF to P ratio",
    "range": "0 - 2.0",
    "default": "0",
    "unit": ""
  },
  "RTUN_SPD_I_RATIO": {
    "desc": "Rover Quicktune Speed FF to I ratio",
    "range": "0 - 2.0",
    "default": "0",
    "unit": ""
  },
  "RTUN_AUTO_FILTER": {
    "desc": "Rover Quicktune auto filter enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RTUN_AUTO_SAVE": {
    "desc": "Rover Quicktune auto save",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "RTUN_RC_FUNC": {
    "desc": "Rover Quicktune RC function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RTUN_SPEED_MIN": {
    "desc": "Rover Quicktune minimum speed for tuning",
    "range": "0.1 - 0.5",
    "default": "0",
    "unit": "m/s"
  },
  "CAM1_THERM_PAL": {
    "desc": "Camera1 Thermal Palette",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_THERM_GAIN": {
    "desc": "Camera1 Thermal Gain",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_THERM_RAW": {
    "desc": "Camera1 Thermal Raw Data",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "ESRC_EXTN_THRESH": {
    "desc": "EKF Source ExternalNav Innovation Threshold",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ESRC_EXTN_QUAL": {
    "desc": "EKF Source ExternalNav Quality Threshold",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "ESRC_FLOW_THRESH": {
    "desc": "EKF Source OpticalFlow Innovation Threshold",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ESRC_FLOW_QUAL": {
    "desc": "EKF Source OpticalFlow Quality Threshold",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "ESRC_RNGFND_MAX": {
    "desc": "EKF Source Rangefinder Max",
    "range": "0 - 50",
    "default": "0",
    "unit": "m"
  },
  "WEB_ENABLE": {
    "desc": "enable web server",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WEB_BIND_PORT": {
    "desc": "web server TCP port",
    "range": "1 - 65535",
    "default": "0",
    "unit": ""
  },
  "WEB_DEBUG": {
    "desc": "web server debugging",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WEB_BLOCK_SIZE": {
    "desc": "web server block size",
    "range": "1 - 65535",
    "default": "0",
    "unit": ""
  },
  "WEB_TIMEOUT": {
    "desc": "web server timeout",
    "range": "0.1 - 60",
    "default": "0",
    "unit": "s"
  },
  "WEB_SENDFILE_MIN": {
    "desc": "web server minimum file size for sendfile",
    "range": "0 - 10000000",
    "default": "0",
    "unit": ""
  },
  "TA_ACT_FN": {
    "desc": "Activation Function for Terrain Avoidance",
    "range": "300 - 307",
    "default": "0",
    "unit": ""
  },
  "TA_PTCH_DWN_MIN": {
    "desc": "down distance minimum for Pitching",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TA_PTCH_FWD_MIN": {
    "desc": "forward distance minimum for Pitching",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TA_QUAD_DWN_MIN": {
    "desc": "Downward distance minimum Quading",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TA_QUAD_FWD_MIN": {
    "desc": "minimum forward distance for Quading",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TA_PTCH_GSP_MIN": {
    "desc": "minimum ground speed for Pitching",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "TA_PTCH_TIMEOUT": {
    "desc": "timeout Pitching",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "TA_HOME_DIST": {
    "desc": "safe distance around home",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TA_ALT_MAX": {
    "desc": "ceiling for pitching/quading",
    "range": "20 - 1000",
    "default": "0",
    "unit": "m"
  },
  "TA_GSP_MAX": {
    "desc": "Maximum Groundspeed",
    "range": "10 - 40",
    "default": "0",
    "unit": "m/s"
  },
  "TA_GSP_AIRBRAKE": {
    "desc": "Groudspeed Airbrake limt",
    "range": "-1 - -10",
    "default": "0",
    "unit": "m/s"
  },
  "TA_CMTC_HGT": {
    "desc": "CMTC Height",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TA_CMTC_ENABLE": {
    "desc": "CMTC Enable",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "TA_UPDATE_RATE": {
    "desc": "Frequency to process avoidance",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "TA_CMTC_RAD": {
    "desc": "CMTC loiter radius",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "ALAND_ENABLE": {
    "desc": "Auto land enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ALAND_WP_ALT": {
    "desc": "Final approach waypoint alt",
    "range": "1 - 100",
    "default": "0",
    "unit": "m"
  },
  "ALAND_WP_DIST": {
    "desc": "Final approach waypoint distance",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "AHRS_ORIG_LAT": {
    "desc": "AHRS/EKF Origin Latitude",
    "range": "-180 - 180",
    "default": "0",
    "unit": ""
  },
  "AHRS_ORIG_LON": {
    "desc": "AHRS/EKF Origin Longitude",
    "range": "-180 - 180",
    "default": "0",
    "unit": ""
  },
  "AHRS_ORIG_ALT": {
    "desc": "AHRS/EKF Origin Altitude",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "QUIK_ENABLE": {
    "desc": "Quicktune enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "QUIK_AXES": {
    "desc": "Quicktune axes [Bitmask: 0:Roll,1:Pitch,2:Yaw]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "QUIK_DOUBLE_TIME": {
    "desc": "Quicktune doubling time",
    "range": "5 - 20",
    "default": "0",
    "unit": "s"
  },
  "QUIK_GAIN_MARGIN": {
    "desc": "Quicktune gain margin",
    "range": "20 - 80",
    "default": "0",
    "unit": "%"
  },
  "QUIK_OSC_SMAX": {
    "desc": "Quicktune oscillation rate threshold",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "QUIK_YAW_P_MAX": {
    "desc": "Quicktune Yaw P max",
    "range": "0.1 - 3",
    "default": "0",
    "unit": ""
  },
  "QUIK_YAW_D_MAX": {
    "desc": "Quicktune Yaw D max",
    "range": "0.001 - 1",
    "default": "0",
    "unit": ""
  },
  "QUIK_RP_PI_RATIO": {
    "desc": "Quicktune roll/pitch PI ratio",
    "range": "0.5 - 1.0",
    "default": "0",
    "unit": ""
  },
  "QUIK_Y_PI_RATIO": {
    "desc": "Quicktune Yaw PI ratio",
    "range": "0.5 - 20",
    "default": "0",
    "unit": ""
  },
  "QUIK_AUTO_FILTER": {
    "desc": "Quicktune auto filter enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "QUIK_AUTO_SAVE": {
    "desc": "Quicktune auto save",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "QUIK_RC_FUNC": {
    "desc": "Quicktune RC function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "QUIK_MAX_REDUCE": {
    "desc": "Quicktune maximum gain reduction",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "QUIK_OPTIONS": {
    "desc": "Quicktune options [Bitmask: 0:UseTwoPositionSwitch]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "QUIK_ANGLE_MAX": {
    "desc": "maximum angle error for tune abort",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "PREV_ENABLE": {
    "desc": "parameter reversion enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PREV_RC_FUNC": {
    "desc": "param reversion RC function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RCK_FORCEHL": {
    "desc": "Force enable High Latency mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RCK_PERIOD": {
    "desc": "Update rate",
    "range": "0 - 600",
    "default": "0",
    "unit": "s"
  },
  "RCK_DEBUG": {
    "desc": "Display Rockblock debugging text",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RCK_ENABLE": {
    "desc": "Enable Message transmission",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RCK_TIMEOUT": {
    "desc": "GCS timeout to start sendin Rockblock messages",
    "range": "0 - 600",
    "default": "0",
    "unit": "s"
  },
  "FOLLP_FAIL_MODE": {
    "desc": "Plane Follow lost target mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLLP_EXIT_MODE": {
    "desc": "Plane Follow exit mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLLP_ACT_FN": {
    "desc": "Plane Follow Scripting ActivationFunction",
    "range": "300 - 307",
    "default": "0",
    "unit": ""
  },
  "FOLLP_TIMEOUT": {
    "desc": "Plane Follow Telemetry Timeout",
    "range": "0 - 30",
    "default": "0",
    "unit": "s"
  },
  "FOLLP_OVRSHT_DEG": {
    "desc": "Plane Follow Scripting Overshoot Angle",
    "range": "0 - 180",
    "default": "0",
    "unit": "deg"
  },
  "FOLLP_TURN_DEG": {
    "desc": "Plane Follow Scripting Turn Angle",
    "range": "0 - 180",
    "default": "0",
    "unit": "deg"
  },
  "FOLLP_DIST_CLOSE": {
    "desc": "Plane Follow Scripting Close Distance",
    "range": "0 - 100",
    "default": "0",
    "unit": "m"
  },
  "FOLLP_WIDE_TURNS": {
    "desc": "Plane Follow Scripting Wide Turns",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_ALT": {
    "desc": "Plane Follow Scripting Altitude Override",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "FOLLP_D_P": {
    "desc": "Plane Follow Scripting distance P gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_D_I": {
    "desc": "Plane Follow Scripting distance I gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_D_D": {
    "desc": "Plane Follow Scripting distance D gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_V_P": {
    "desc": "Plane Follow Scripting speed P gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_V_I": {
    "desc": "Plane Follow Scripting speed I gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_V_D": {
    "desc": "Plane Follow Scripting speed D gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_LKAHD": {
    "desc": "Plane Follow Lookahead seconds",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "FOLLP_SIM_TLF_FN": {
    "desc": "Plane Follow Simulate Telemetry fail function",
    "range": "300 - 307",
    "default": "0",
    "unit": ""
  },
  "FOLLP_XT_P": {
    "desc": "Plane Follow crosstrack PID controller P term",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_XT_I": {
    "desc": "Plane Follow crosstrack PID controller I term",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_XT_D": {
    "desc": "Plane Follow crosstrack PID controller D term",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "FOLLP_XT_MAX": {
    "desc": "Plane Follow crosstrack PID controller maximum correction",
    "range": "0 - 1",
    "default": "0",
    "unit": "deg"
  },
  "FOLLP_XT_I_MAX": {
    "desc": "Plane Follow crosstrack PID controller maximum integral",
    "range": "0 - 100",
    "default": "0",
    "unit": "ms"
  },
  "FOLLP_REFRESH": {
    "desc": "Plane Follow refresh rate",
    "range": "0 - 0.2",
    "default": "0",
    "unit": "s"
  },
  "POI_DIST_MAX": {
    "desc": "Mount POI distance max",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "ARM_SYSID": {
    "desc": "MAV_SYSID must be set",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_FOLL_SYSID": {
    "desc": "FOLL_SYSID must be set",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_FOLL_SYSID_X": {
    "desc": "Vehicle should not follow itself",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_FOLL_OFS_DEF": {
    "desc": "Follow Offsets defaulted",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_MNTX_SYSID": {
    "desc": "Follow and Mount should follow the same vehicle",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_RTL_CLIMB": {
    "desc": "RTL_CLIMB_MIN should be a valid value",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_ESTOP": {
    "desc": "Motors EStopped",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_FENCE": {
    "desc": "Fence not enabled",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_RALLY": {
    "desc": "Rally too far",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_C_RTL_ALT": {
    "desc": "RTL_ALT should be a valid value",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_P_Q_FS_LAND": {
    "desc": "Warn if Q failsafe will land",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_P_Q_FS_RTL": {
    "desc": "Warn if Q failsafe will QRTL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_P_AIRSPEED": {
    "desc": "Check AIRSPEED_ parameters",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_P_STALL": {
    "desc": "AIRSPEED_MIN should be 25% above STALL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_P_SCALING": {
    "desc": "SCALING_SPEED valid",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_P_RTL_ALT": {
    "desc": "RTL_ALTITUDE should be a valid value",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_P_QRTL_ALT": {
    "desc": "Q_RTL_ALT should be a valid value",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARM_V_ALT_LEGAL": {
    "desc": "Legal max altitude",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TERR_BRK_ENABLE": {
    "desc": "terrain brake enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TERR_BRK_ALT": {
    "desc": "terrain brake altitude",
    "range": "1 - 100",
    "default": "0",
    "unit": "m"
  },
  "TERR_BRK_HDIST": {
    "desc": "terrain brake home distance",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "TERR_BRK_SPD": {
    "desc": "terrain brake speed threshold",
    "range": "0 - 5",
    "default": "0",
    "unit": "m/s"
  },
  "RK9_FORCEHL": {
    "desc": "Force enable High Latency mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RK9_PERIOD": {
    "desc": "Update rate",
    "range": "0 - 600",
    "default": "0",
    "unit": "s"
  },
  "RK9_DEBUG": {
    "desc": "Display Rockblock debugging text",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RK9_ENABLE": {
    "desc": "Enable Message transmission",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RK9_TIMEOUT": {
    "desc": "GCS timeout to start sendin Rockblock messages",
    "range": "0 - 600",
    "default": "0",
    "unit": "s"
  },
  "RK9_SERPORT": {
    "desc": "Rockblock Serial Port",
    "range": "0 - 8",
    "default": "0",
    "unit": ""
  },
  "RK9_SCRPORT": {
    "desc": "Rockblock Scripting Serial Port",
    "range": "0 - 8",
    "default": "0",
    "unit": ""
  },
  "RK9_RELAY": {
    "desc": "Rockblock Power Relay",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "RK9_BOOTED": {
    "desc": "Rockblock booted feedback",
    "range": "50 - 110",
    "default": "0",
    "unit": ""
  },
  "DR_ENABLE": {
    "desc": "Deadreckoning Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DR_ENABLE_DIST": {
    "desc": "Deadreckoning Enable Distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "DR_GPS_SACC_MAX": {
    "desc": "Deadreckoning GPS speed accuracy maximum threshold",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "DR_GPS_SAT_MIN": {
    "desc": "Deadreckoning GPS satellite count min threshold",
    "range": "0 - 30",
    "default": "0",
    "unit": ""
  },
  "DR_GPS_TRIGG_SEC": {
    "desc": "Deadreckoning GPS check trigger seconds",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "DR_FLY_ANGLE": {
    "desc": "Deadreckoning Lean Angle",
    "range": "0 - 45",
    "default": "0",
    "unit": "deg"
  },
  "DR_FLY_ALT_MIN": {
    "desc": "Deadreckoning Altitude Min",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "DR_FLY_TIMEOUT": {
    "desc": "Deadreckoning flight timeout",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "DR_NEXT_MODE": {
    "desc": "Deadreckoning Next Mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PARAM_SET_ENABLE": {
    "desc": "Param Set enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC_COUNT": {
    "desc": "Count of SOC estimators",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC1_IDX": {
    "desc": "Battery estimator index",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC1_NCELL": {
    "desc": "Battery estimator cell count",
    "range": "0 - 48",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC1_C1": {
    "desc": "Battery estimator coefficient1",
    "range": "100 - 200",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC1_C2": {
    "desc": "Battery estimator coefficient2",
    "range": "2 - 5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC1_C3": {
    "desc": "Battery estimator coefficient3",
    "range": "0.01 - 0.5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC1_C4": {
    "desc": "Battery estimator coefficient4",
    "range": "5 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC2_IDX": {
    "desc": "Battery estimator index",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC2_NCELL": {
    "desc": "Battery estimator cell count",
    "range": "0 - 48",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC2_C1": {
    "desc": "Battery estimator coefficient1",
    "range": "100 - 200",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC2_C2": {
    "desc": "Battery estimator coefficient2",
    "range": "2 - 5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC2_C3": {
    "desc": "Battery estimator coefficient3",
    "range": "0.01 - 0.5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC2_C4": {
    "desc": "Battery estimator coefficient4",
    "range": "5 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC3_IDX": {
    "desc": "Battery estimator index",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC3_NCELL": {
    "desc": "Battery estimator cell count",
    "range": "0 - 48",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC3_C1": {
    "desc": "Battery estimator coefficient1",
    "range": "100 - 200",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC3_C2": {
    "desc": "Battery estimator coefficient2",
    "range": "2 - 5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC3_C3": {
    "desc": "Battery estimator coefficient3",
    "range": "0.01 - 0.5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC3_C4": {
    "desc": "Battery estimator coefficient4",
    "range": "5 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC4_IDX": {
    "desc": "Battery estimator index",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC4_NCELL": {
    "desc": "Battery estimator cell count",
    "range": "0 - 48",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC4_C1": {
    "desc": "Battery estimator coefficient1",
    "range": "100 - 200",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC4_C2": {
    "desc": "Battery estimator coefficient2",
    "range": "2 - 5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC4_C3": {
    "desc": "Battery estimator coefficient3",
    "range": "0.01 - 0.5",
    "default": "0",
    "unit": ""
  },
  "BATT_SOC4_C4": {
    "desc": "Battery estimator coefficient4",
    "range": "5 - 100",
    "default": "0",
    "unit": ""
  },
  "SHIP_ENABLE": {
    "desc": "Ship landing enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SHIP_LAND_ANGLE": {
    "desc": "Ship landing angle",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "SHIP_AUTO_OFS": {
    "desc": "Ship automatic offset trigger",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AEROM_ANG_ACCEL": {
    "desc": "Angular acceleration limit",
    "range": "N/A",
    "default": "0",
    "unit": "deg/s/s"
  },
  "AEROM_ANG_TC": {
    "desc": "Roll control filtertime constant",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AEROM_THR_PIT_FF": {
    "desc": "Throttle feed forward from pitch",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "AEROM_SPD_P": {
    "desc": "P gain for speed controller",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "AEROM_SPD_I": {
    "desc": "I gain for speed controller",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "AEROM_ROL_COR_TC": {
    "desc": "Roll control time constant",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AEROM_TIME_COR_P": {
    "desc": "Time constant for correction of our distance along the path",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AEROM_ERR_COR_P": {
    "desc": "P gain for path error corrections",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AEROM_ERR_COR_D": {
    "desc": "D gain for path error corrections",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AEROM_ENTRY_RATE": {
    "desc": "The roll rate to use when entering a roll maneuver",
    "range": "N/A",
    "default": "0",
    "unit": "deg/s"
  },
  "AEROM_THR_LKAHD": {
    "desc": "The lookahead for throttle control",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AEROM_DEBUG": {
    "desc": "Debug control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AEROM_THR_MIN": {
    "desc": "Minimum Throttle",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "AEROM_THR_BOOST": {
    "desc": "Throttle boost",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "AEROM_YAW_ACCEL": {
    "desc": "Yaw acceleration",
    "range": "N/A",
    "default": "0",
    "unit": "deg/s/s"
  },
  "AEROM_LKAHD": {
    "desc": "Lookahead",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AEROM_PATH_SCALE": {
    "desc": "Path Scale",
    "range": "0.1 - 100",
    "default": "0",
    "unit": ""
  },
  "AEROM_BOX_WIDTH": {
    "desc": "Box Width",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AEROM_STALL_THR": {
    "desc": "Stall turn throttle",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "AEROM_STALL_PIT": {
    "desc": "Stall turn pitch threshold",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "AEROM_KE_RUDD": {
    "desc": "KnifeEdge Rudder",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "AEROM_KE_RUDD_LK": {
    "desc": "KnifeEdge Rudder lookahead",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AEROM_ALT_ABORT": {
    "desc": "Altitude Abort",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AEROM_TS_P": {
    "desc": "Timesync P gain",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AEROM_TS_I": {
    "desc": "Timesync I gain",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AEROM_TS_SPDMAX": {
    "desc": "Timesync speed max",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "AEROM_TS_RATE": {
    "desc": "Timesync rate of send of NAMED_VALUE_FLOAT data",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "AEROM_MIS_ANGLE": {
    "desc": "Mission angle",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "AEROM_OPTIONS": {
    "desc": "Aerobatic options [Bitmask: 0:UseRTLOnAbort, 1:AddAtToMessages, 2:DualAircraftSynchronised]",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "TRIK_ENABLE": {
    "desc": "Tricks on Switch Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TRIK_SEL_FN": {
    "desc": "Trik Selection Scripting Function",
    "range": "301 - 307",
    "default": "0",
    "unit": ""
  },
  "TRIK_ACT_FN": {
    "desc": "Trik Action Scripting Function",
    "range": "301 - 307",
    "default": "0",
    "unit": ""
  },
  "TRIK_COUNT": {
    "desc": "Trik Count",
    "range": "1 - 11",
    "default": "0",
    "unit": ""
  },
  "EFI_HFE_ENABLE": {
    "desc": "Enable HFE EFI driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_HFE_RATE_HZ": {
    "desc": "HFI EFI Update rate",
    "range": "0 - 400",
    "default": "0",
    "unit": ""
  },
  "EFI_HFE_ECU_IDX": {
    "desc": "HFI EFI ECU index",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "EFI_HFE_FUEL_DTY": {
    "desc": "HFI EFI fuel density",
    "range": "0 - 2000",
    "default": "0",
    "unit": ""
  },
  "EFI_HFE_REL_IDX": {
    "desc": "HFI EFI relay index",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "EFI_HFE_CANDRV": {
    "desc": "HFI EFI CAN driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_HFE_OPTIONS": {
    "desc": "HFI EFI options [Bitmask: 1:EnableCANLogging]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_H6K_ENABLE": {
    "desc": "Enable Halo6000 EFI driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_H6K_CANDRV": {
    "desc": "Halo6000 CAN driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_H6K_START_FN": {
    "desc": "Halo6000 start auxilliary function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_H6K_TELEM_RT": {
    "desc": "Halo6000 telemetry rate",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "EFI_H6K_FUELTOT": {
    "desc": "Halo6000 total fuel capacity",
    "range": "N/A",
    "default": "0",
    "unit": "litres"
  },
  "EFI_H6K_OPTIONS": {
    "desc": "Halo6000 options [Bitmask: 0:LogAllCanPackets]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "UM_SERVO_MASK": {
    "desc": "Mask of UltraMotion servos [Bitmask: 0:SERVO1,1:SERVO2,2:SERVO3,3:SERVO4,4:SERVO5,5:SERVO6,6:SERVO7,7:SERVO8,8:SERVO9,9:SERVO10,10:SERVO11,11:SERVO12]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "UM_CANDRV": {
    "desc": "Set CAN driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "UM_RATE_HZ": {
    "desc": "Update rate for UltraMotion servos",
    "range": "1 - 400",
    "default": "0",
    "unit": "Hz"
  },
  "UM_OPTIONS": {
    "desc": "Optional settings [Bitmask: 0:LogAllFrames,1:ParseTelemetry,2:SendPosAsNamedValueFloat]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_2K_ENABLE": {
    "desc": "Enable NMEA 2000 EFI driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_2K_CANDRV": {
    "desc": "NMEA 2000 CAN driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_2K_OPTIONS": {
    "desc": "NMEA 2000 options [Bitmask: 0:EnableLogging]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DJIR_DEBUG": {
    "desc": "DJIRS2 debug",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DJIR_UPSIDEDOWN": {
    "desc": "DJIRS2 upside down",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_ENABLE": {
    "desc": "Enable SkyPower EFI support",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_CANDRV": {
    "desc": "Set SkyPower EFI CAN driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_UPDATE_HZ": {
    "desc": "SkyPower EFI update rate",
    "range": "10 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "EFI_SP_THR_FN": {
    "desc": "SkyPower EFI throttle function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_THR_RATE": {
    "desc": "SkyPower EFI throttle rate",
    "range": "10 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "EFI_SP_START_FN": {
    "desc": "SkyPower EFI start function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_GEN_FN": {
    "desc": "SkyPower EFI generator control function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_MIN_RPM": {
    "desc": "SkyPower EFI minimum RPM",
    "range": "1 - 1000",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_TLM_RT": {
    "desc": "SkyPower EFI telemetry rate",
    "range": "1 - 10",
    "default": "0",
    "unit": "Hz"
  },
  "EFI_SP_LOG_RT": {
    "desc": "SkyPower EFI log rate",
    "range": "1 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "EFI_SP_ST_DISARM": {
    "desc": "SkyPower EFI allow start disarmed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_MODEL": {
    "desc": "SkyPower EFI ECU model",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_GEN_CTRL": {
    "desc": "SkyPower EFI enable generator control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SP_RST_TIME": {
    "desc": "SkyPower EFI restart time",
    "range": "0 - 10",
    "default": "0",
    "unit": "s"
  },
  "EFI_DLA64_ENABLE": {
    "desc": "EFI DLA64 enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TRQL_ENABLE": {
    "desc": "Torqeedo TorqLink Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TRQL_DEBUG": {
    "desc": "Torqeedo TorqLink Debug Level",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_DLA_ENABLE": {
    "desc": "EFI DLA enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_DLA_LPS": {
    "desc": "EFI DLA fuel scale",
    "range": "0.00001 - 1",
    "default": "0",
    "unit": "litres"
  },
  "BATT_ANX_ENABLE": {
    "desc": "Enable ANX battery support",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_ANX_CANDRV": {
    "desc": "Set ANX CAN driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_ANX_INDEX": {
    "desc": "ANX CAN battery index",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_ANX_OPTIONS": {
    "desc": "ANX CAN battery options [Bitmask: 0:LogAllFrames]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SVF_ENABLE": {
    "desc": "Generator SVFFI enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_SVF_ARMCHECK": {
    "desc": "Generator SVFFI arming check",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ENABLE": {
    "desc": "Enable this script",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "BATT_IDX": {
    "desc": "Index of assigned battery.",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CFACT": {
    "desc": "Measurement correction factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MODE": {
    "desc": "Sensor operating mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PORT": {
    "desc": "Scripting serial port number",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "EFI_INF_ENABLE": {
    "desc": "EFI INF-Inject enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_INF_OPTIONS": {
    "desc": "EFI INF-Inject options [Bitmask: 0:EnableLogging]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_INF_THR_HZ": {
    "desc": "EFI INF-Inject throttle rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "EFI_INF_IGN_AUX": {
    "desc": "EFI INF-Inject ignition aux function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_ENABLE": {
    "desc": "LTE Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_SERPORT": {
    "desc": "Serial Port",
    "range": "0 - 8",
    "default": "0",
    "unit": ""
  },
  "LTE_SCRPORT": {
    "desc": "Scripting Serial Port",
    "range": "0 - 8",
    "default": "0",
    "unit": ""
  },
  "LTE_SERVER_IP0": {
    "desc": "Server IP 0",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "LTE_SERVER_IP1": {
    "desc": "Server IP 1",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "LTE_SERVER_IP2": {
    "desc": "Server IP 2",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "LTE_SERVER_IP3": {
    "desc": "Server IP 3",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "LTE_SERVER_PORT": {
    "desc": "Server Port",
    "range": "1 - 65525",
    "default": "0",
    "unit": ""
  },
  "LTE_BAUD": {
    "desc": "Serial Baud Rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_TIMEOUT": {
    "desc": "Timeout",
    "range": "0 - 60",
    "default": "0",
    "unit": "s"
  },
  "LTE_PROTOCOL": {
    "desc": "LTE protocol",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_OPTIONS": {
    "desc": "LTE options [Bitmask: 0:LogAllData,1:VerboseSignalInfoGCS,2:DisableMultiplexing,3:DisableSignalQueries,4:UseTCP]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_IBAUD": {
    "desc": "LTE initial baudrate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_MCCMNC": {
    "desc": "LTE operator selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_TX_RATE": {
    "desc": "Max transmit rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LTE_BAND": {
    "desc": "LTE band selection",
    "range": "-1 - 50",
    "default": "0",
    "unit": ""
  },
  "ESC_HW_ENABLE": {
    "desc": "Hobbywing ESC Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ESC_HW_POLES": {
    "desc": "Hobbywing ESC motor poles",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "ESC_HW_OFS": {
    "desc": "Hobbywing ESC motor offset",
    "range": "0 - 31",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_PRX": {
    "desc": "TOFSENSE-M to be used as Proximity sensor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_NO": {
    "desc": "TOFSENSE-M Connected",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_MODE": {
    "desc": "TOFSENSE-M mode to be used",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_INST1": {
    "desc": "TOFSENSE-M First Instance",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_ID1": {
    "desc": "TOFSENSE-M First ID",
    "range": "1 - 255",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_INST2": {
    "desc": "TOFSENSE-M Second Instance",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_ID2": {
    "desc": "TOFSENSE-M Second ID",
    "range": "1 - 255",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_INST3": {
    "desc": "TOFSENSE-M Third Instance",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_ID3": {
    "desc": "TOFSENSE-M Thir ID",
    "range": "1 - 255",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_S1_PRX": {
    "desc": "TOFSENSE-M to be used as Proximity sensor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_S1_SP": {
    "desc": "TOFSENSE-M serial port config",
    "range": "1 - 4",
    "default": "0",
    "unit": ""
  },
  "TOFSENSE_S1_BR": {
    "desc": "TOFSENSE-M serial port baudrate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_TYPE": {
    "desc": "ADSB Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_LIST_MAX": {
    "desc": "ADSB vehicle list size",
    "range": "1 - 100",
    "default": "0",
    "unit": ""
  },
  "ADSB_LIST_RADIUS": {
    "desc": "ADSB vehicle list radius filter",
    "range": "0 - 100000",
    "default": "0",
    "unit": "m"
  },
  "ADSB_ICAO_ID": {
    "desc": "ICAO_ID vehicle identification number",
    "range": "-1 - 16777215",
    "default": "0",
    "unit": ""
  },
  "ADSB_EMIT_TYPE": {
    "desc": "Emitter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_LEN_WIDTH": {
    "desc": "Aircraft length and width",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_OFFSET_LAT": {
    "desc": "GPS antenna lateral offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_OFFSET_LON": {
    "desc": "GPS antenna longitudinal offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_RF_SELECT": {
    "desc": "Transceiver RF selection [Bitmask: 0:Rx,1:Tx]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_SQUAWK": {
    "desc": "Squawk code",
    "range": "0 - 7777",
    "default": "0",
    "unit": "octal"
  },
  "ADSB_RF_CAPABLE": {
    "desc": "RF capabilities [Bitmask: 0:UAT_in,1:1090ES_in,2:UAT_out,3:1090ES_out]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_LIST_ALT": {
    "desc": "ADSB vehicle list altitude filter",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "ADSB_ICAO_SPECL": {
    "desc": "ICAO_ID of special vehicle",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_LOG": {
    "desc": "ADS-B logging",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ADSB_OPTIONS": {
    "desc": "ADS-B Options [Bitmask: 0:Ping200X Send GPS,1:Squawk 7400 on RC failsafe,2:Squawk 7400 on GCS failsafe,3:Sagetech MXS use External Config,4:Transmit in traditional Mode 3A/C only and inhibit Mode-S and ES (ADSB) transmissions]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_ENABLE": {
    "desc": "Enable Advanced Failsafe",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_MAN_PIN": {
    "desc": "Manual Pin",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_HB_PIN": {
    "desc": "Heartbeat Pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "AFS_WP_COMMS": {
    "desc": "Comms Waypoint",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_WP_GPS_LOSS": {
    "desc": "GPS Loss Waypoint",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_TERMINATE": {
    "desc": "Force Terminate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_TERM_ACTION": {
    "desc": "Terminate action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_TERM_PIN": {
    "desc": "Terminate Pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "AFS_AMSL_LIMIT": {
    "desc": "AMSL limit",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AFS_AMSL_ERR_GPS": {
    "desc": "Error margin for GPS based AMSL limit",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AFS_QNH_PRESSURE": {
    "desc": "QNH pressure",
    "range": "N/A",
    "default": "0",
    "unit": "hPa"
  },
  "AFS_MAX_GPS_LOSS": {
    "desc": "Maximum number of GPS loss events",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_MAX_COM_LOSS": {
    "desc": "Maximum number of comms loss events",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_GEOFENCE": {
    "desc": "Enable geofence Advanced Failsafe",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_RC": {
    "desc": "Enable RC Advanced Failsafe",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_RC_MAN_ONLY": {
    "desc": "Enable RC Termination only in manual control modes",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_DUAL_LOSS": {
    "desc": "Enable dual loss terminate due to failure of both GCS and GPS simultaneously",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_RC_FAIL_TIME": {
    "desc": "RC failure time",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AFS_MAX_RANGE": {
    "desc": "Max allowed range",
    "range": "N/A",
    "default": "0",
    "unit": "km"
  },
  "AFS_OPTIONS": {
    "desc": "AFS options [Bitmask: 0: Continue the mission even after comms are recovered (does not go to the mission item at the time comms were lost), 1: Enable AFS for all autonomous modes (not just AUTO), 2: Option to not jump to AFS_WP_COMMS if already in the return path]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AFS_GCS_TIMEOUT": {
    "desc": "GCS timeout",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AHRS_GPS_GAIN": {
    "desc": "AHRS GPS gain",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "AHRS_GPS_USE": {
    "desc": "AHRS use GPS for DCM navigation and position-down",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AHRS_YAW_P": {
    "desc": "Yaw P",
    "range": "0.1 - 0.4",
    "default": "0",
    "unit": ""
  },
  "AHRS_RP_P": {
    "desc": "AHRS RP_P",
    "range": "0.1 - 0.4",
    "default": "0",
    "unit": ""
  },
  "AHRS_WIND_MAX": {
    "desc": "Maximum wind",
    "range": "0 - 127",
    "default": "0",
    "unit": "m/s"
  },
  "AHRS_TRIM_X": {
    "desc": "AHRS Trim Roll",
    "range": "-0.1745 - +0.1745",
    "default": "0",
    "unit": "rad"
  },
  "AHRS_TRIM_Y": {
    "desc": "AHRS Trim Pitch",
    "range": "-0.1745 - +0.1745",
    "default": "0",
    "unit": "rad"
  },
  "AHRS_TRIM_Z": {
    "desc": "AHRS Trim Yaw",
    "range": "-0.1745 - +0.1745",
    "default": "0",
    "unit": "rad"
  },
  "AHRS_ORIENTATION": {
    "desc": "Board Orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AHRS_COMP_BETA": {
    "desc": "AHRS Velocity Complementary Filter Beta Coefficient",
    "range": "0.001 - 0.5",
    "default": "0",
    "unit": ""
  },
  "AHRS_GPS_MINSATS": {
    "desc": "AHRS GPS Minimum satellites",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "AHRS_EKF_TYPE": {
    "desc": "Use NavEKF Kalman filter for attitude and position estimation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AHRS_CUSTOM_ROLL": {
    "desc": "Board orientation roll offset",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "AHRS_CUSTOM_PIT": {
    "desc": "Board orientation pitch offset",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "AHRS_CUSTOM_YAW": {
    "desc": "Board orientation yaw offset",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "AHRS_OPTIONS": {
    "desc": "Optional AHRS behaviour [Bitmask: 0:DisableDCMFallbackFW, 1:DisableDCMFallbackVTOL, 2:DontDisableAirspeedUsingEKF]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AIS_TYPE": {
    "desc": "AIS receiver type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AIS_LIST_MAX": {
    "desc": "AIS vessel list size",
    "range": "1 - 100",
    "default": "0",
    "unit": ""
  },
  "AIS_TIME_OUT": {
    "desc": "AIS vessel time out",
    "range": "1 - 2000",
    "default": "0",
    "unit": "s"
  },
  "AIS_LOGGING": {
    "desc": "AIS logging options [Bitmask: 0:Log all AIVDM messages,1:Log only unsupported AIVDM messages,2:Log decoded messages]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARMING_ACCTHRESH": {
    "desc": "Accelerometer error threshold",
    "range": "0.25 - 3.0",
    "default": "0",
    "unit": "m/s/s"
  },
  "ARMING_RUDDER": {
    "desc": "Arming with Rudder enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARMING_MIS_ITEMS": {
    "desc": "Required mission items [Bitmask: 0:Land,1:VTOL Land,2:DO_LAND_START,3:Takeoff,4:VTOL Takeoff,5:Rallypoint,6:RTL]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARMING_OPTIONS": {
    "desc": "Arming options [Bitmask: 0:Disable prearm display,1:Do not send status text on state change,2:Skip IMU consistency checks when ICE motor running]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARMING_MAGTHRESH": {
    "desc": "Compass magnetic field strength error threshold vs earth magnetic model",
    "range": "0 - 500",
    "default": "0",
    "unit": "mGauss"
  },
  "ARMING_CRSDP_IGN": {
    "desc": "Disable CrashDump Arming check",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARMING_NEED_LOC": {
    "desc": "Require vehicle location",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARMING_SKIPCHK": {
    "desc": "Arm Checks to Skip (bitmask) [Bitmask: 1:Barometer,2:Compass,3:GPS lock,4:INS,5:Parameters,6:RC Channels,7:Board voltage,8:Battery Level,10:Logging Available,11:Hardware safety switch,12:GPS Configuration,13:System,14:Mission,15:Rangefinder,16:Camera,17:AuxAuth,18:VisualOdometry,19:FFT]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AROT_ENABLE": {
    "desc": "Enable settings for RSC Setpoint",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AROT_HS_P": {
    "desc": "P gain for head speed controller",
    "range": "0.3 - 1",
    "default": "0",
    "unit": ""
  },
  "AROT_HS_SET_PT": {
    "desc": "Target Head Speed",
    "range": "1000 - 2800",
    "default": "0",
    "unit": "RPM"
  },
  "AROT_FWD_SP_TARG": {
    "desc": "Target Glide Body Frame Forward Speed",
    "range": "8 - 20",
    "default": "0",
    "unit": "m/s"
  },
  "AROT_COL_FILT_E": {
    "desc": "Entry Phase Collective Filter",
    "range": "0.2 - 0.5",
    "default": "0",
    "unit": "Hz"
  },
  "AROT_COL_FILT_G": {
    "desc": "Glide Phase Collective Filter",
    "range": "0.03 - 0.15",
    "default": "0",
    "unit": "Hz"
  },
  "AROT_XY_ACC_MAX": {
    "desc": "Body Frame XY Acceleration Limit",
    "range": "0.5 - 8.0",
    "default": "0",
    "unit": "m/s/s"
  },
  "AROT_HS_SENSOR": {
    "desc": "Main Rotor RPM Sensor",
    "range": "0.5 - 3",
    "default": "0",
    "unit": "s"
  },
  "AROT_FWD_P": {
    "desc": "Forward Speed Controller P Gain",
    "range": "1.000 - 8.000",
    "default": "0",
    "unit": ""
  },
  "AROT_FWD_I": {
    "desc": "Forward Speed Controller I Gain",
    "range": "0.02 - 1.00",
    "default": "0",
    "unit": ""
  },
  "AROT_FWD_IMAX": {
    "desc": "Forward Speed Controller I Gain Maximum",
    "range": "1.000 - 8.000",
    "default": "0",
    "unit": ""
  },
  "AROT_FWD_D": {
    "desc": "Forward Speed Controller D Gain",
    "range": "0.00 - 1.00",
    "default": "0",
    "unit": ""
  },
  "AROT_FWD_FF": {
    "desc": "Forward Speed Controller Feed Forward Gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "AROT_FWD_FLTE": {
    "desc": "Forward Speed Controller Error Filter",
    "range": "0 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "AROT_FWD_FLTD": {
    "desc": "Forward Speed Controller input filter for D term",
    "range": "0 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "ARSPD_ENABLE": {
    "desc": "Airspeed Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_TUBE_ORDER": {
    "desc": "Control pitot tube order",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_PRIMARY": {
    "desc": "Primary airspeed sensor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_OPTIONS": {
    "desc": "Airspeed options bitmask [Bitmask: 0:SpeedMismatchDisable, 1:AllowSpeedMismatchRecovery, 2:DisableVoltageCorrection, 3:UseEkf3Consistency, 4:ReportOffset]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_WIND_MAX": {
    "desc": "Maximum airspeed and ground speed difference",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "ARSPD_WIND_WARN": {
    "desc": "Airspeed and GPS speed difference that gives a warning",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "ARSPD_WIND_GATE": {
    "desc": "Re-enable Consistency Check Gate Size",
    "range": "0.0 - 10.0",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_TYPE": {
    "desc": "Airspeed type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_USE": {
    "desc": "Airspeed use",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_OFFSET": {
    "desc": "Airspeed offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_RATIO": {
    "desc": "Airspeed ratio",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_PIN": {
    "desc": "Airspeed pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_AUTOCAL": {
    "desc": "This parameter and function is not used by this vehicle. Always set to 0.",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_TUBE_ORDR": {
    "desc": "Control pitot tube order",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_SKIP_CAL": {
    "desc": "Skip airspeed offset calibration on startup",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_PSI_RANGE": {
    "desc": "The PSI range of the device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_BUS": {
    "desc": "Airspeed I2C bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD2_DEVID": {
    "desc": "Airspeed ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_TYPE": {
    "desc": "Airspeed type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_USE": {
    "desc": "Airspeed use",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_OFFSET": {
    "desc": "Airspeed offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_RATIO": {
    "desc": "Airspeed ratio",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_PIN": {
    "desc": "Airspeed pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_AUTOCAL": {
    "desc": "This parameter and function is not used by this vehicle. Always set to 0.",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_TUBE_ORDR": {
    "desc": "Control pitot tube order",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_SKIP_CAL": {
    "desc": "Skip airspeed offset calibration on startup",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_PSI_RANGE": {
    "desc": "The PSI range of the device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_BUS": {
    "desc": "Airspeed I2C bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD3_DEVID": {
    "desc": "Airspeed ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_TYPE": {
    "desc": "Airspeed type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_USE": {
    "desc": "Airspeed use",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_OFFSET": {
    "desc": "Airspeed offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_RATIO": {
    "desc": "Airspeed ratio",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_PIN": {
    "desc": "Airspeed pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_AUTOCAL": {
    "desc": "This parameter and function is not used by this vehicle. Always set to 0.",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_TUBE_ORDR": {
    "desc": "Control pitot tube order",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_SKIP_CAL": {
    "desc": "Skip airspeed offset calibration on startup",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_PSI_RANGE": {
    "desc": "The PSI range of the device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_BUS": {
    "desc": "Airspeed I2C bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD4_DEVID": {
    "desc": "Airspeed ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_TYPE": {
    "desc": "Airspeed type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_USE": {
    "desc": "Airspeed use",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_OFFSET": {
    "desc": "Airspeed offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_RATIO": {
    "desc": "Airspeed ratio",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_PIN": {
    "desc": "Airspeed pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_AUTOCAL": {
    "desc": "This parameter and function is not used by this vehicle. Always set to 0.",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_TUBE_ORDR": {
    "desc": "Control pitot tube order",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_SKIP_CAL": {
    "desc": "Skip airspeed offset calibration on startup",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_PSI_RANGE": {
    "desc": "The PSI range of the device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_BUS": {
    "desc": "Airspeed I2C bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD5_DEVID": {
    "desc": "Airspeed ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_TYPE": {
    "desc": "Airspeed type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_USE": {
    "desc": "Airspeed use",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_OFFSET": {
    "desc": "Airspeed offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_RATIO": {
    "desc": "Airspeed ratio",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_PIN": {
    "desc": "Airspeed pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_AUTOCAL": {
    "desc": "This parameter and function is not used by this vehicle. Always set to 0.",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_TUBE_ORDR": {
    "desc": "Control pitot tube order",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_SKIP_CAL": {
    "desc": "Skip airspeed offset calibration on startup",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_PSI_RANGE": {
    "desc": "The PSI range of the device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_BUS": {
    "desc": "Airspeed I2C bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD6_DEVID": {
    "desc": "Airspeed ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_TYPE": {
    "desc": "Airspeed type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_USE": {
    "desc": "Airspeed use",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_OFFSET": {
    "desc": "Airspeed offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_RATIO": {
    "desc": "Airspeed ratio",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_PIN": {
    "desc": "Airspeed pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "ARSPD_AUTOCAL": {
    "desc": "This parameter and function is not used by this vehicle. Always set to 0.",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_TUBE_ORDR": {
    "desc": "Control pitot tube order",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_SKIP_CAL": {
    "desc": "Skip airspeed offset calibration on startup",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_PSI_RANGE": {
    "desc": "The PSI range of the device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_BUS": {
    "desc": "Airspeed I2C bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ARSPD_DEVID": {
    "desc": "Airspeed ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ATC_SLEW_YAW": {
    "desc": "Yaw target slew rate",
    "range": "500 - 18000",
    "default": "0",
    "unit": "cdeg/s"
  },
  "ATC_ACCEL_Y_MAX": {
    "desc": "Acceleration Max for Yaw",
    "range": "0 - 72000",
    "default": "0",
    "unit": "cdeg/s/s"
  },
  "ATC_RATE_FF_ENAB": {
    "desc": "Rate Feedforward Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ATC_ACCEL_R_MAX": {
    "desc": "Acceleration Max for Roll",
    "range": "0 - 180000",
    "default": "0",
    "unit": "cdeg/s/s"
  },
  "ATC_ACCEL_P_MAX": {
    "desc": "Acceleration Max for Pitch",
    "range": "0 - 180000",
    "default": "0",
    "unit": "cdeg/s/s"
  },
  "ATC_ANGLE_BOOST": {
    "desc": "Angle Boost",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ATC_ANG_RLL_P": {
    "desc": "Roll axis angle controller P gain",
    "range": "3.000 - 12.000",
    "default": "0",
    "unit": ""
  },
  "ATC_ANG_PIT_P": {
    "desc": "Pitch axis angle controller P gain",
    "range": "3.000 - 12.000",
    "default": "0",
    "unit": ""
  },
  "ATC_ANG_YAW_P": {
    "desc": "Yaw axis angle controller P gain",
    "range": "3.000 - 12.000",
    "default": "0",
    "unit": ""
  },
  "ATC_ANG_LIM_TC": {
    "desc": "Angle Limit (to maintain altitude) Time Constant",
    "range": "0.5 - 10.0",
    "default": "0",
    "unit": ""
  },
  "ATC_RATE_R_MAX": {
    "desc": "Angular Velocity Max for Roll",
    "range": "0 - 1080",
    "default": "0",
    "unit": "deg/s"
  },
  "ATC_RATE_P_MAX": {
    "desc": "Angular Velocity Max for Pitch",
    "range": "0 - 1080",
    "default": "0",
    "unit": "deg/s"
  },
  "ATC_RATE_Y_MAX": {
    "desc": "Angular Velocity Max for Yaw",
    "range": "0 - 1080",
    "default": "0",
    "unit": "deg/s"
  },
  "ATC_INPUT_TC": {
    "desc": "Attitude control input time constant",
    "range": "0 - 1",
    "default": "0",
    "unit": "s"
  },
  "ATC_LAND_R_MULT": {
    "desc": "Landed roll gain multiplier",
    "range": "0.25 - 1.0",
    "default": "0",
    "unit": ""
  },
  "ATC_LAND_P_MULT": {
    "desc": "Landed pitch gain multiplier",
    "range": "0.25 - 1.0",
    "default": "0",
    "unit": ""
  },
  "ATC_LAND_Y_MULT": {
    "desc": "Landed yaw gain multiplier",
    "range": "0.25 - 1.0",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_P": {
    "desc": "Roll axis rate controller P gain",
    "range": "0.0 - 0.35",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_I": {
    "desc": "Roll axis rate controller I gain",
    "range": "0.0 - 0.6",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_IMAX": {
    "desc": "Roll axis rate controller I gain maximum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_D": {
    "desc": "Roll axis rate controller D gain",
    "range": "0.0 - 0.03",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_FF": {
    "desc": "Roll axis rate controller feed forward",
    "range": "0.05 - 0.5",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_FLTT": {
    "desc": "Roll axis rate controller target frequency in Hz",
    "range": "5 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_RLL_FLTE": {
    "desc": "Roll axis rate controller error frequency in Hz",
    "range": "5 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_RLL_FLTD": {
    "desc": "Roll axis rate controller derivative frequency in Hz",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_RLL_SMAX": {
    "desc": "Roll slew rate limit",
    "range": "0 - 200",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_PDMX": {
    "desc": "Roll axis rate controller PD sum maximum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_D_FF": {
    "desc": "Roll Derivative FeedForward Gain",
    "range": "0 - 0.02",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_NTF": {
    "desc": "Roll Target notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_RLL_NEF": {
    "desc": "Roll Error notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_P": {
    "desc": "Pitch axis rate controller P gain",
    "range": "0.0 - 0.35",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_I": {
    "desc": "Pitch axis rate controller I gain",
    "range": "0.0 - 0.6",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_IMAX": {
    "desc": "Pitch axis rate controller I gain maximum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_D": {
    "desc": "Pitch axis rate controller D gain",
    "range": "0.0 - 0.03",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_FF": {
    "desc": "Pitch axis rate controller feed forward",
    "range": "0.05 - 0.5",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_FLTT": {
    "desc": "Pitch axis rate controller target frequency in Hz",
    "range": "5 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_PIT_FLTE": {
    "desc": "Pitch axis rate controller error frequency in Hz",
    "range": "5 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_PIT_FLTD": {
    "desc": "Pitch axis rate controller derivative frequency in Hz",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_PIT_SMAX": {
    "desc": "Pitch slew rate limit",
    "range": "0 - 200",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_PDMX": {
    "desc": "Pitch axis rate controller PD sum maximum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_D_FF": {
    "desc": "Pitch Derivative FeedForward Gain",
    "range": "0 - 0.02",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_NTF": {
    "desc": "Pitch Target notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_NEF": {
    "desc": "Pitch Error notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_P": {
    "desc": "Yaw axis rate controller P gain",
    "range": "0.180 - 0.60",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_I": {
    "desc": "Yaw axis rate controller I gain",
    "range": "0.01 - 0.2",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_IMAX": {
    "desc": "Yaw axis rate controller I gain maximum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_D": {
    "desc": "Yaw axis rate controller D gain",
    "range": "0.000 - 0.02",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_FF": {
    "desc": "Yaw axis rate controller feed forward",
    "range": "0 - 0.5",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_FLTT": {
    "desc": "Yaw axis rate controller target frequency in Hz",
    "range": "5 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_YAW_FLTE": {
    "desc": "Yaw axis rate controller error frequency in Hz",
    "range": "5 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_YAW_FLTD": {
    "desc": "Yaw axis rate controller derivative frequency in Hz",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_YAW_SMAX": {
    "desc": "Yaw slew rate limit",
    "range": "0 - 200",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_PDMX": {
    "desc": "Yaw axis rate controller PD sum maximum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_D_FF": {
    "desc": "Yaw Derivative FeedForward Gain",
    "range": "0 - 0.02",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_NTF": {
    "desc": "Yaw Target notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": "Hz"
  },
  "ATC_RAT_YAW_NEF": {
    "desc": "Yaw Error notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "ATC_THR_MIX_MIN": {
    "desc": "Throttle Mix Minimum",
    "range": "0.1 - 0.25",
    "default": "0",
    "unit": ""
  },
  "ATC_THR_MIX_MAX": {
    "desc": "Throttle Mix Maximum",
    "range": "0.5 - 0.9",
    "default": "0",
    "unit": ""
  },
  "ATC_THR_MIX_MAN": {
    "desc": "Throttle Mix Manual",
    "range": "0.1 - 0.9",
    "default": "0",
    "unit": ""
  },
  "ATC_THR_G_BOOST": {
    "desc": "Throttle-gain boost",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_HOVR_ROL_TRM": {
    "desc": "Hover Roll Trim",
    "range": "0 - 1000",
    "default": "0",
    "unit": "cdeg"
  },
  "ATC_RAT_RLL_ILMI": {
    "desc": "Roll axis rate controller I-term leak minimum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_PIT_ILMI": {
    "desc": "Pitch axis rate controller I-term leak minimum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_RAT_YAW_ILMI": {
    "desc": "Yaw axis rate controller I-term leak minimum",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "ATC_PIRO_COMP": {
    "desc": "Piro Comp Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_AXES": {
    "desc": "Autotune axis bitmask [Bitmask: 0:Roll,1:Pitch,2:Yaw]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_AGGR": {
    "desc": "Autotune aggressiveness",
    "range": "0.05 - 0.10",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_MIN_D": {
    "desc": "AutoTune minimum D",
    "range": "0.0001 - 0.005",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_GMBK": {
    "desc": "AutoTune Gain Margin Backoff",
    "range": "0.0 - 0.5",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_SEQ": {
    "desc": "AutoTune Sequence Bitmask [Bitmask: 0:VFF,1:Rate D/Rate P(incl max gain),2:Angle P,3:Max Gain Only,4:Tune Check]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_FRQ_MIN": {
    "desc": "AutoTune minimum sweep frequency",
    "range": "10 - 30",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_FRQ_MAX": {
    "desc": "AutoTune maximum sweep frequency",
    "range": "50 - 120",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_GN_MAX": {
    "desc": "AutoTune maximum response gain",
    "range": "1 - 2.5",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_VELXY_P": {
    "desc": "AutoTune velocity xy P gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "AUTOTUNE_ACC_MAX": {
    "desc": "AutoTune maximum allowable angular acceleration",
    "range": "1 - 4000",
    "default": "0",
    "unit": "deg/s/s"
  },
  "AUTOTUNE_RAT_MAX": {
    "desc": "Autotune maximum allowable angular rate",
    "range": "0 - 500",
    "default": "0",
    "unit": "deg/s"
  },
  "AVD_ENABLE": {
    "desc": "Enable Avoidance using ADSB",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AVD_F_ACTION": {
    "desc": "Collision Avoidance Behavior",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AVD_W_ACTION": {
    "desc": "Collision Avoidance Behavior - Warn",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AVD_F_RCVRY": {
    "desc": "Recovery behaviour after a fail event",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AVD_OBS_MAX": {
    "desc": "Maximum number of obstacles to track",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AVD_W_TIME": {
    "desc": "Time Horizon Warn",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AVD_F_TIME": {
    "desc": "Time Horizon Fail",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "AVD_W_DIST_XY": {
    "desc": "Distance Warn XY",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AVD_F_DIST_XY": {
    "desc": "Distance Fail XY",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AVD_W_DIST_Z": {
    "desc": "Distance Warn Z",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AVD_F_DIST_Z": {
    "desc": "Distance Fail Z",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AVD_F_ALT_MIN": {
    "desc": "ADS-B avoidance minimum altitude",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "AVOID_ENABLE": {
    "desc": "Avoidance control enable/disable [Bitmask: 0:UseFence,1:UseProximitySensor,2:UseBeaconFence]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AVOID_ANGLE_MAX": {
    "desc": "Avoidance max lean angle in non-GPS flight modes",
    "range": "0 - 4500",
    "default": "0",
    "unit": "cdeg"
  },
  "AVOID_DIST_MAX": {
    "desc": "Avoidance distance maximum in non-GPS flight modes",
    "range": "1 - 30",
    "default": "0",
    "unit": "m"
  },
  "AVOID_MARGIN": {
    "desc": "Avoidance distance margin in GPS modes",
    "range": "1 - 10",
    "default": "0",
    "unit": "m"
  },
  "AVOID_BEHAVE": {
    "desc": "Avoidance behaviour",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "AVOID_BACKUP_SPD": {
    "desc": "Avoidance maximum horizontal backup speed",
    "range": "0 - 2",
    "default": "0",
    "unit": "m/s"
  },
  "AVOID_ALT_MIN": {
    "desc": "Avoidance minimum altitude",
    "range": "0 - 6",
    "default": "0",
    "unit": "m"
  },
  "AVOID_ACCEL_MAX": {
    "desc": "Avoidance maximum acceleration",
    "range": "0 - 9",
    "default": "0",
    "unit": "m/s/s"
  },
  "AVOID_BACKUP_DZ": {
    "desc": "Avoidance deadzone between stopping and backing away from obstacle",
    "range": "0 - 2",
    "default": "0",
    "unit": "m"
  },
  "AVOID_BACKZ_SPD": {
    "desc": "Avoidance maximum vertical backup speed",
    "range": "0 - 2",
    "default": "0",
    "unit": "m/s"
  },
  "BARO1_GND_PRESS": {
    "desc": "Ground Pressure",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "BARO_GND_TEMP": {
    "desc": "ground temperature",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "BARO_ALT_OFFSET": {
    "desc": "altitude offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "BARO_PRIMARY": {
    "desc": "Primary barometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO_EXT_BUS": {
    "desc": "External baro bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO2_GND_PRESS": {
    "desc": "Ground Pressure",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "BARO3_GND_PRESS": {
    "desc": "Absolute Pressure",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "BARO_FLTR_RNG": {
    "desc": "Range in which sample is accepted",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "BARO_PROBE_EXT": {
    "desc": "External barometers to probe [Bitmask: 0:BMP085,1:BMP280,2:MS5611,3:MS5607,4:MS5637,5:FBM320,6:DPS280,7:LPS25H,8:Keller,9:MS5837,10:BMP388,11:SPL06,12:MSP,13:BMP581,14:AUAV]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO1_DEVID": {
    "desc": "Baro ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO2_DEVID": {
    "desc": "Baro ID2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO3_DEVID": {
    "desc": "Baro ID3",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO_FIELD_ELV": {
    "desc": "field elevation",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "BARO_ALTERR_MAX": {
    "desc": "Altitude error maximum",
    "range": "0 - 5000",
    "default": "0",
    "unit": "m"
  },
  "BARO_OPTIONS": {
    "desc": "Barometer options [Bitmask: 0:Treat MS5611 as MS5607]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO1_THST_SCALE": {
    "desc": "Thrust compensation",
    "range": "-300 - 300",
    "default": "0",
    "unit": ""
  },
  "BARO1_WCF_ENABLE": {
    "desc": "Wind coefficient enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO1_WCF_FWD": {
    "desc": "Pressure error coefficient in positive X direction (forward)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO1_WCF_BCK": {
    "desc": "Pressure error coefficient in negative X direction (backwards)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO1_WCF_RGT": {
    "desc": "Pressure error coefficient in positive Y direction (right)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO1_WCF_LFT": {
    "desc": "Pressure error coefficient in negative Y direction (left)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO1_WCF_UP": {
    "desc": "Pressure error coefficient in positive Z direction (up)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO1_WCF_DN": {
    "desc": "Pressure error coefficient in negative Z direction (down)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO2_WCF_ENABLE": {
    "desc": "Wind coefficient enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO2_WCF_FWD": {
    "desc": "Pressure error coefficient in positive X direction (forward)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO2_WCF_BCK": {
    "desc": "Pressure error coefficient in negative X direction (backwards)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO2_WCF_RGT": {
    "desc": "Pressure error coefficient in positive Y direction (right)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO2_WCF_LFT": {
    "desc": "Pressure error coefficient in negative Y direction (left)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO2_WCF_UP": {
    "desc": "Pressure error coefficient in positive Z direction (up)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO2_WCF_DN": {
    "desc": "Pressure error coefficient in negative Z direction (down)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO3_WCF_ENABLE": {
    "desc": "Wind coefficient enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BARO3_WCF_FWD": {
    "desc": "Pressure error coefficient in positive X direction (forward)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO3_WCF_BCK": {
    "desc": "Pressure error coefficient in negative X direction (backwards)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO3_WCF_RGT": {
    "desc": "Pressure error coefficient in positive Y direction (right)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO3_WCF_LFT": {
    "desc": "Pressure error coefficient in negative Y direction (left)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO3_WCF_UP": {
    "desc": "Pressure error coefficient in positive Z direction (up)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BARO3_WCF_DN": {
    "desc": "Pressure error coefficient in negative Z direction (down)",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "BATT2_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT2_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT2_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT2_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT2_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT2_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT2_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT2_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT2_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT2_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT2_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT2_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT2_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT2_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT2_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT2_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT2_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT2_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT2_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT2_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT2_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT2_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT2_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT2_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT2_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT2_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT2_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT2_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT2_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT2_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT3_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT3_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT3_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT3_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT3_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT3_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT3_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT3_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT3_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT3_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT3_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT3_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT3_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT3_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT3_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT3_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT3_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT3_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT3_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT3_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT3_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT3_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT3_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT3_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT3_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT3_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT3_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT3_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT3_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT3_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT4_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT4_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT4_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT4_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT4_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT4_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT4_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT4_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT4_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT4_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT4_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT4_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT4_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT4_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT4_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT4_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT4_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT4_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT4_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT4_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT4_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT4_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT4_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT4_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT4_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT4_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT4_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT4_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT4_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT4_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT5_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT5_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT5_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT5_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT5_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT5_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT5_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT5_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT5_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT5_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT5_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT5_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT5_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT5_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT5_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT5_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT5_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT5_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT5_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT5_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT5_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT5_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT5_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT5_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT5_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT5_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT5_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT5_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT5_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT5_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT6_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT6_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT6_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT6_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT6_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT6_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT6_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT6_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT6_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT6_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT6_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT6_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT6_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT6_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT6_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT6_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT6_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT6_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT6_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT6_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT6_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT6_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT6_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT6_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT6_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT6_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT6_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT6_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT6_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT6_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT7_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT7_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT7_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT7_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT7_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT7_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT7_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT7_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT7_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT7_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT7_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT7_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT7_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT7_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT7_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT7_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT7_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT7_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT7_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT7_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT7_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT7_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT7_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT7_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT7_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT7_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT7_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT7_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT7_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT7_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT8_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT8_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT8_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT8_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT8_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT8_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT8_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT8_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT8_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT8_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT8_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT8_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT8_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT8_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT8_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT8_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT8_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT8_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT8_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT8_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT8_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT8_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT8_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT8_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT8_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT8_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT8_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT8_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT8_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT8_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT9_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT9_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT9_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT9_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT9_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT9_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT9_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT9_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT9_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT9_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT9_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT9_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT9_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT9_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT9_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT9_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT9_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT9_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT9_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT9_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT9_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT9_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT9_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT9_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT9_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT9_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT9_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT9_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT9_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT9_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTA_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTA_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATTA_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTA_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTA_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTA_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTA_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTA_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTA_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTA_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTA_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTA_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATTA_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTA_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTA_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTA_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTA_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTA_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATTA_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTA_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATTA_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTA_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTA_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTA_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTA_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTA_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATTA_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATTA_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATTA_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTA_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTB_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTB_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATTB_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTB_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTB_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTB_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTB_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTB_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTB_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTB_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTB_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTB_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATTB_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTB_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTB_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTB_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTB_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTB_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATTB_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTB_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATTB_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTB_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTB_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTB_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTB_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTB_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATTB_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATTB_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATTB_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTB_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTC_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTC_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATTC_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTC_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTC_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTC_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTC_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTC_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTC_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTC_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTC_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTC_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATTC_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTC_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTC_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTC_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTC_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTC_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATTC_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTC_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATTC_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTC_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTC_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTC_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTC_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTC_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATTC_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATTC_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATTC_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTC_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTD_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTD_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATTD_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTD_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTD_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTD_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTD_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTD_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTD_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTD_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTD_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTD_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATTD_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTD_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTD_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTD_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTD_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTD_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATTD_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTD_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATTD_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTD_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTD_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTD_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTD_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTD_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATTD_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATTD_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATTD_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTD_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTE_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTE_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATTE_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTE_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTE_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTE_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTE_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTE_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTE_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTE_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTE_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTE_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATTE_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTE_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTE_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTE_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTE_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTE_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATTE_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTE_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATTE_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTE_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTE_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTE_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTE_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTE_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATTE_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATTE_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATTE_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTE_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTF_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTF_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATTF_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTF_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTF_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTF_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTF_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTF_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTF_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTF_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTF_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTF_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATTF_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTF_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTF_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTF_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTF_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTF_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATTF_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTF_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATTF_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTF_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTF_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTF_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTF_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTF_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATTF_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATTF_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATTF_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTF_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTG_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTG_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATTG_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTG_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTG_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTG_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTG_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTG_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATTG_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTG_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTG_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTG_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATTG_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTG_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATTG_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATTG_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTG_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTG_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATTG_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTG_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATTG_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATTG_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTG_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTG_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTG_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATTG_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATTG_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATTG_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATTG_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATTG_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT_MONITOR": {
    "desc": "Battery monitoring",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_CAPACITY": {
    "desc": "Battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT_SERIAL_NUM": {
    "desc": "Battery serial number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_LOW_TIMER": {
    "desc": "Low voltage timeout",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "BATT_FS_VOLTSRC": {
    "desc": "Failsafe voltage source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_LOW_VOLT": {
    "desc": "Low battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT_LOW_MAH": {
    "desc": "Low battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT_CRT_VOLT": {
    "desc": "Critical battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT_CRT_MAH": {
    "desc": "Battery critical capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT_FS_LOW_ACT": {
    "desc": "Low battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_FS_CRT_ACT": {
    "desc": "Critical battery failsafe action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_ARM_VOLT": {
    "desc": "Required arming voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT_ARM_MAH": {
    "desc": "Required arming remaining capacity",
    "range": "N/A",
    "default": "0",
    "unit": "mAh"
  },
  "BATT_OPTIONS": {
    "desc": "Battery monitor options [Bitmask: 0:Ignore DroneCAN SoC, 1:MPPT reports input voltage and current, 2:MPPT Powered off when disarmed, 3:MPPT Powered on when armed, 4:MPPT Powered off at boot, 5:MPPT Powered on at boot, 6:Send resistance compensated voltage to GCS, 7:Allow DroneCAN InfoAux to be from a different CAN node, 8:Battery is for internal autopilot use only, 9:Sum monitor measures minimum voltage instead of average, 10:Allow DroneCAN dynamic node update on hot-swap]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_VOLT_PIN": {
    "desc": "Battery Voltage sensing pin on the AD7091R5 Ic",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT_CURR_PIN": {
    "desc": "Battery Current sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT_VOLT_MULT": {
    "desc": "Voltage Multiplier",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_AMP_PERVLT": {
    "desc": "Amps per volt",
    "range": "N/A",
    "default": "0",
    "unit": "A/V"
  },
  "BATT_AMP_OFFSET": {
    "desc": "AMP offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT_VLT_OFFSET": {
    "desc": "Volage offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "BATT_I2C_BUS": {
    "desc": "Battery monitor I2C bus number",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "BATT_I2C_ADDR": {
    "desc": "Battery monitor I2C address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT_SUM_MASK": {
    "desc": "Battery Sum mask [Bitmask: 0:monitor 1, 1:monitor 2, 2:monitor 3, 3:monitor 4, 4:monitor 5, 5:monitor 6, 6:monitor 7, 7:monitor 8, 8:monitor 9]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_CURR_MULT": {
    "desc": "Scales reported power monitor current",
    "range": "0.1 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_FL_VLT_MIN": {
    "desc": "Empty fuel level voltage",
    "range": "0.01 - 10",
    "default": "0",
    "unit": "V"
  },
  "BATT_FL_V_MULT": {
    "desc": "Fuel level voltage multiplier",
    "range": "0.01 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_FL_FLTR": {
    "desc": "Fuel level filter frequency",
    "range": "-1 - 1",
    "default": "0",
    "unit": "Hz"
  },
  "BATT_FL_PIN": {
    "desc": "Fuel level analog pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BATT_FL_FF": {
    "desc": "First order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_FL_FS": {
    "desc": "Second order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_FL_FT": {
    "desc": "Third order term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_FL_OFF": {
    "desc": "Offset term",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "BATT_MAX_VOLT": {
    "desc": "Maximum Battery Voltage",
    "range": "7 - 100",
    "default": "0",
    "unit": ""
  },
  "BATT_MAX_AMPS": {
    "desc": "Battery monitor max current",
    "range": "1 - 400",
    "default": "0",
    "unit": "A"
  },
  "BATT_SHUNT": {
    "desc": "Battery monitor shunt resistor",
    "range": "0.0001 - 0.01",
    "default": "0",
    "unit": "Ohm"
  },
  "BATT_ESC_MASK": {
    "desc": "ESC mask [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BATT_CHANNEL": {
    "desc": "INA3221 channel",
    "range": "1 - 3",
    "default": "0",
    "unit": ""
  },
  "BCN_TYPE": {
    "desc": "Beacon based position estimation device type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BCN_LATITUDE": {
    "desc": "Beacon origin's latitude",
    "range": "-90 - 90",
    "default": "0",
    "unit": "deg"
  },
  "BCN_LONGITUDE": {
    "desc": "Beacon origin's longitude",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "BCN_ALT": {
    "desc": "Beacon origin's altitude above sealevel in meters",
    "range": "0 - 10000",
    "default": "0",
    "unit": "m"
  },
  "BCN_ORIENT_YAW": {
    "desc": "Beacon systems rotation from north in degrees",
    "range": "-180 - +180",
    "default": "0",
    "unit": "deg"
  },
  "BRD_SER1_RTSCTS": {
    "desc": "Serial 1 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SER2_RTSCTS": {
    "desc": "Serial 2 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SER3_RTSCTS": {
    "desc": "Serial 3 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SER4_RTSCTS": {
    "desc": "Serial 4 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SER5_RTSCTS": {
    "desc": "Serial 5 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SER6_RTSCTS": {
    "desc": "Serial 6 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SER7_RTSCTS": {
    "desc": "Serial 7 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SER8_RTSCTS": {
    "desc": "Serial 8 flow control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SAFETY_DEFLT": {
    "desc": "Sets default state of the safety switch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SBUS_OUT": {
    "desc": "SBUS output rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SERIAL_NUM": {
    "desc": "User-defined serial number",
    "range": "-8388608 - 8388607",
    "default": "0",
    "unit": ""
  },
  "BRD_SAFETY_MASK": {
    "desc": "Outputs which ignore the safety switch state [Bitmask: 0:Output1, 1:Output2, 2:Output3, 3:Output4, 4:Output5, 5:Output6, 6:Output7, 7:Output8, 8:Output9, 9:Output10, 10:Output11, 11:Output12, 12:Output13, 13:Output14, 14:Output15, 15:Output16, 16:Output17, 17:Output18, 18:Output19, 19:Output20, 20:Output21, 21:Output22, 22:Output23, 23:Output24, 24:Output25, 25:Output26, 26:Output27, 27:Output28, 28:Output29, 29:Output30, 30:Output31, 31:Output32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_HEAT_TARG": {
    "desc": "Board heater temperature target",
    "range": "-1 - 80",
    "default": "0",
    "unit": "degC"
  },
  "BRD_TYPE": {
    "desc": "Board type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_IO_ENABLE": {
    "desc": "Enable IO co-processor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_SAFETYOPTION": {
    "desc": "Options for safety button behavior [Bitmask: 0:ActiveForSafetyDisable,1:ActiveForSafetyEnable,2:ActiveWhenArmed,3:Force safety on when the aircraft disarms]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_VBUS_MIN": {
    "desc": "Autopilot board voltage requirement",
    "range": "4.0 - 5.5",
    "default": "0",
    "unit": "V"
  },
  "BRD_VSERVO_MIN": {
    "desc": "Servo voltage requirement",
    "range": "3.3 - 12.0",
    "default": "0",
    "unit": "V"
  },
  "BRD_SD_SLOWDOWN": {
    "desc": "microSD slowdown",
    "range": "0 - 32",
    "default": "0",
    "unit": ""
  },
  "BRD_PWM_VOLT_SEL": {
    "desc": "Set PWM Out Voltage",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_OPTIONS": {
    "desc": "Board options [Bitmask: 0:Enable hardware watchdog, 1:Disable MAVftp, 2:Enable set of internal parameters, 3:Enable Debug Pins, 4:Unlock flash on reboot, 5:Write protect firmware flash on reboot, 6:Write protect bootloader flash on reboot, 7:Skip board validation, 8:Disable board arming gpio output change on arm/disarm, 9:Use safety pins as profiled]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_BOOT_DELAY": {
    "desc": "Boot delay",
    "range": "0 - 10000",
    "default": "0",
    "unit": "ms"
  },
  "BRD_HEAT_P": {
    "desc": "Board Heater P gain",
    "range": "1 - 500",
    "default": "0",
    "unit": ""
  },
  "BRD_HEAT_I": {
    "desc": "Board Heater I gain",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "BRD_HEAT_IMAX": {
    "desc": "Board Heater IMAX",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "BRD_ALT_CONFIG": {
    "desc": "Alternative HW config",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "BRD_HEAT_LOWMGN": {
    "desc": "Board heater temp lower margin",
    "range": "0 - 20",
    "default": "0",
    "unit": "degC"
  },
  "BRD_SD_MISSION": {
    "desc": "SDCard Mission size",
    "range": "0 - 64",
    "default": "0",
    "unit": ""
  },
  "BRD_SD_FENCE": {
    "desc": "SDCard Fence size",
    "range": "0 - 64",
    "default": "0",
    "unit": ""
  },
  "BRD_IO_DSHOT": {
    "desc": "Load DShot FW on IO",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_IDLE_STATS": {
    "desc": "Capture and calculate true CPU load using idle threads",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_TYPE": {
    "desc": "Set type of direct attached radio",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_PROT": {
    "desc": "protocol",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_DEBUG": {
    "desc": "debug level",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_DISCRC": {
    "desc": "disable receive CRC",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_SIGCH": {
    "desc": "RSSI signal strength",
    "range": "0 - 16",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_PPSCH": {
    "desc": "Packet rate channel",
    "range": "0 - 16",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_TELEM": {
    "desc": "Enable telemetry",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_TXPOW": {
    "desc": "Telemetry Transmit power",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_FCCTST": {
    "desc": "Put radio into FCC test mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_STKMD": {
    "desc": "Stick input mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_TESTCH": {
    "desc": "Set radio to factory test channel",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_TSIGCH": {
    "desc": "RSSI value channel for telemetry data on transmitter",
    "range": "0 - 16",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_TPPSCH": {
    "desc": "Telemetry PPS channel",
    "range": "0 - 16",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_TXMAX": {
    "desc": "Transmitter transmit power",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_BZOFS": {
    "desc": "Transmitter buzzer adjustment",
    "range": "0 - 40",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_ABTIME": {
    "desc": "Auto-bind time",
    "range": "0 - 120",
    "default": "0",
    "unit": ""
  },
  "BRD_RADIO_ABLVL": {
    "desc": "Auto-bind level",
    "range": "0 - 31",
    "default": "0",
    "unit": ""
  },
  "BRD_RTC_TYPES": {
    "desc": "Allowed sources of RTC time [Bitmask: 0:GPS,1:MAVLINK_SYSTEM_TIME,2:HW]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BRD_RTC_TZ_MIN": {
    "desc": "Timezone offset from UTC",
    "range": "-720 - +840",
    "default": "0",
    "unit": ""
  },
  "BTN_ENABLE": {
    "desc": "Enable button reporting",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_PIN1": {
    "desc": "First button Pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BTN_PIN2": {
    "desc": "Second button Pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BTN_PIN3": {
    "desc": "Third button Pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BTN_PIN4": {
    "desc": "Fourth button Pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "BTN_REPORT_SEND": {
    "desc": "Report send time",
    "range": "0 - 3600",
    "default": "0",
    "unit": ""
  },
  "BTN_OPTIONS1": {
    "desc": "Button Pin 1 Options [Bitmask: 0:PWM Input,1:InvertInput]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_OPTIONS2": {
    "desc": "Button Pin 2 Options [Bitmask: 0:PWM Input,1:InvertInput]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_OPTIONS3": {
    "desc": "Button Pin 3 Options [Bitmask: 0:PWM Input,1:InvertInput]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_OPTIONS4": {
    "desc": "Button Pin 4 Options [Bitmask: 0:PWM Input,1:InvertInput]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_FUNC1": {
    "desc": "Button Pin 1 RC Channel function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_FUNC2": {
    "desc": "Button Pin 2 RC Channel function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_FUNC3": {
    "desc": "Button Pin 3 RC Channel function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "BTN_FUNC4": {
    "desc": "Button Pin 4 RC Channel function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM_MAX_ROLL": {
    "desc": "Maximum photo roll angle.",
    "range": "0 - 180",
    "default": "0",
    "unit": "deg"
  },
  "CAM_AUTO_ONLY": {
    "desc": "Distance-trigging in AUTO mode only",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_TYPE": {
    "desc": "Camera shutter (trigger) type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_DURATION": {
    "desc": "Camera shutter duration held open",
    "range": "0 - 5",
    "default": "0",
    "unit": "s"
  },
  "CAM1_SERVO_ON": {
    "desc": "Camera servo ON PWM value",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "CAM1_SERVO_OFF": {
    "desc": "Camera servo OFF PWM value",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "CAM1_TRIGG_DIST": {
    "desc": "Camera trigger distance",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "CAM1_RELAY_ON": {
    "desc": "Camera relay ON value",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_INTRVAL_MIN": {
    "desc": "Camera minimum time interval between photos",
    "range": "0 - 10",
    "default": "0",
    "unit": "s"
  },
  "CAM1_FEEDBAK_PIN": {
    "desc": "Camera feedback pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "CAM1_FEEDBAK_POL": {
    "desc": "Camera feedback pin polarity",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_OPTIONS": {
    "desc": "Camera options [Bitmask: 0:Recording Starts at arming and stops at disarming]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_MNT_INST": {
    "desc": "Camera Mount instance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_HFOV": {
    "desc": "Camera horizontal field of view",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "CAM1_VFOV": {
    "desc": "Camera vertical field of view",
    "range": "0 - 180",
    "default": "0",
    "unit": "deg"
  },
  "CAM1_RC_TYPE": {
    "desc": "RunCam device type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_RC_FEATURES": {
    "desc": "RunCam features available [Bitmask: 0:Power Button,1:WiFi Button,2:Change Mode,3:5-Key OSD,4:Settings Access,5:DisplayPort,6:Start Recording,7:Stop Recording]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_RC_BT_DELAY": {
    "desc": "RunCam boot delay before allowing updates",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_RC_BTN_DELAY": {
    "desc": "RunCam button delay before allowing further button presses",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_RC_MDE_DELAY": {
    "desc": "RunCam mode delay before allowing further button presses",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM1_RC_CONTROL": {
    "desc": "RunCam control option [Bitmask: 0:Stick yaw right,1:Stick roll right,2:3-position switch,3:2-position switch,4:Autorecording enabled]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_TYPE": {
    "desc": "Camera shutter (trigger) type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_DURATION": {
    "desc": "Camera shutter duration held open",
    "range": "0 - 5",
    "default": "0",
    "unit": "s"
  },
  "CAM2_SERVO_ON": {
    "desc": "Camera servo ON PWM value",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "CAM2_SERVO_OFF": {
    "desc": "Camera servo OFF PWM value",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "CAM2_TRIGG_DIST": {
    "desc": "Camera trigger distance",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "CAM2_RELAY_ON": {
    "desc": "Camera relay ON value",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_INTRVAL_MIN": {
    "desc": "Camera minimum time interval between photos",
    "range": "0 - 10",
    "default": "0",
    "unit": "s"
  },
  "CAM2_FEEDBAK_PIN": {
    "desc": "Camera feedback pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "CAM2_FEEDBAK_POL": {
    "desc": "Camera feedback pin polarity",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_OPTIONS": {
    "desc": "Camera options [Bitmask: 0:Recording Starts at arming and stops at disarming]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_MNT_INST": {
    "desc": "Camera Mount instance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_HFOV": {
    "desc": "Camera horizontal field of view",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "CAM2_VFOV": {
    "desc": "Camera vertical field of view",
    "range": "0 - 180",
    "default": "0",
    "unit": "deg"
  },
  "CAM2_RC_TYPE": {
    "desc": "RunCam device type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_RC_FEATURES": {
    "desc": "RunCam features available [Bitmask: 0:Power Button,1:WiFi Button,2:Change Mode,3:5-Key OSD,4:Settings Access,5:DisplayPort,6:Start Recording,7:Stop Recording]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_RC_BT_DELAY": {
    "desc": "RunCam boot delay before allowing updates",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_RC_BTN_DELAY": {
    "desc": "RunCam button delay before allowing further button presses",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_RC_MDE_DELAY": {
    "desc": "RunCam mode delay before allowing further button presses",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAM2_RC_CONTROL": {
    "desc": "RunCam control option [Bitmask: 0:Stick yaw right,1:Stick roll right,2:3-position switch,3:2-position switch,4:Autorecording enabled]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_LOGLEVEL": {
    "desc": "Loglevel",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_PROTOCOL": {
    "desc": "Enable use of specific protocol over virtual driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_PROTOCOL2": {
    "desc": "Secondary protocol with 11 bit CAN addressing",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_PC_ESC_BM": {
    "desc": "ESC channels [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_PC_ESC_RT": {
    "desc": "ESC output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D1_PC_SRV_BM": {
    "desc": "Servo channels [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_PC_SRV_RT": {
    "desc": "Servo command output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D1_PC_ECU_ID": {
    "desc": "ECU Node ID",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_PC_ECU_RT": {
    "desc": "ECU command output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D1_UC_NODE": {
    "desc": "Own node ID",
    "range": "1 - 125",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_SRV_BM": {
    "desc": "Output channels to be transmitted as servo over DroneCAN [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16, 16: Servo 17, 17: Servo 18, 18: Servo 19, 19: Servo 20, 20: Servo 21, 21: Servo 22, 22: Servo 23, 23: Servo 24, 24: Servo 25, 25: Servo 26, 26: Servo 27, 27: Servo 28, 28: Servo 29, 29: Servo 30, 30: Servo 31, 31: Servo 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_ESC_BM": {
    "desc": "Output channels to be transmitted as ESC over DroneCAN [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_SRV_RT": {
    "desc": "Servo output rate",
    "range": "1 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D1_UC_OPTION": {
    "desc": "DroneCAN options [Bitmask: 0:ClearDNADatabase,1:IgnoreDNANodeConflicts,2:EnableCanfd,3:IgnoreDNANodeUnhealthy,4:SendServoAsPWM,5:SendGNSS,6:UseHimarkServo,7:HobbyWingESC,8:EnableStats,9:EnableFlexDebug,10:SecondaryAllowExtendedFrames]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_NTF_RT": {
    "desc": "Notify State rate",
    "range": "1 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D1_UC_ESC_OF": {
    "desc": "ESC Output channels offset",
    "range": "0 - 18",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_POOL": {
    "desc": "CAN pool size",
    "range": "1024 - 16384",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_ESC_RV": {
    "desc": "Bitmask for output channels for reversible ESCs over DroneCAN. [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_RLY_RT": {
    "desc": "DroneCAN relay output rate",
    "range": "0 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D1_UC_SER_EN": {
    "desc": "DroneCAN Serial enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S1_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S1_IDX": {
    "desc": "DroneCAN Serial1 index",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S1_BD": {
    "desc": "DroneCAN Serial default baud rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S1_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S2_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S2_IDX": {
    "desc": "Serial port number on remote CAN node",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S2_BD": {
    "desc": "DroneCAN Serial default baud rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S2_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S3_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S3_IDX": {
    "desc": "Serial port number on remote CAN node",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S3_BD": {
    "desc": "Serial baud rate on remote CAN node",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D1_UC_S3_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_PROTOCOL": {
    "desc": "Enable use of specific protocol over virtual driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_PROTOCOL2": {
    "desc": "Secondary protocol with 11 bit CAN addressing",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_PC_ESC_BM": {
    "desc": "ESC channels [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_PC_ESC_RT": {
    "desc": "ESC output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D2_PC_SRV_BM": {
    "desc": "Servo channels [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_PC_SRV_RT": {
    "desc": "Servo command output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D2_PC_ECU_ID": {
    "desc": "ECU Node ID",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_PC_ECU_RT": {
    "desc": "ECU command output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D2_UC_NODE": {
    "desc": "Own node ID",
    "range": "1 - 125",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_SRV_BM": {
    "desc": "Output channels to be transmitted as servo over DroneCAN [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16, 16: Servo 17, 17: Servo 18, 18: Servo 19, 19: Servo 20, 20: Servo 21, 21: Servo 22, 22: Servo 23, 23: Servo 24, 24: Servo 25, 25: Servo 26, 26: Servo 27, 27: Servo 28, 28: Servo 29, 29: Servo 30, 30: Servo 31, 31: Servo 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_ESC_BM": {
    "desc": "Output channels to be transmitted as ESC over DroneCAN [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_SRV_RT": {
    "desc": "Servo output rate",
    "range": "1 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D2_UC_OPTION": {
    "desc": "DroneCAN options [Bitmask: 0:ClearDNADatabase,1:IgnoreDNANodeConflicts,2:EnableCanfd,3:IgnoreDNANodeUnhealthy,4:SendServoAsPWM,5:SendGNSS,6:UseHimarkServo,7:HobbyWingESC,8:EnableStats,9:EnableFlexDebug,10:SecondaryAllowExtendedFrames]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_NTF_RT": {
    "desc": "Notify State rate",
    "range": "1 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D2_UC_ESC_OF": {
    "desc": "ESC Output channels offset",
    "range": "0 - 18",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_POOL": {
    "desc": "CAN pool size",
    "range": "1024 - 16384",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_ESC_RV": {
    "desc": "Bitmask for output channels for reversible ESCs over DroneCAN. [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_RLY_RT": {
    "desc": "DroneCAN relay output rate",
    "range": "0 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D2_UC_SER_EN": {
    "desc": "DroneCAN Serial enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S1_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S1_IDX": {
    "desc": "DroneCAN Serial1 index",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S1_BD": {
    "desc": "DroneCAN Serial default baud rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S1_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S2_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S2_IDX": {
    "desc": "Serial port number on remote CAN node",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S2_BD": {
    "desc": "DroneCAN Serial default baud rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S2_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S3_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S3_IDX": {
    "desc": "Serial port number on remote CAN node",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S3_BD": {
    "desc": "Serial baud rate on remote CAN node",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D2_UC_S3_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_PROTOCOL": {
    "desc": "Enable use of specific protocol over virtual driver",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_PROTOCOL2": {
    "desc": "Secondary protocol with 11 bit CAN addressing",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_PC_ESC_BM": {
    "desc": "ESC channels [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_PC_ESC_RT": {
    "desc": "ESC output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D3_PC_SRV_BM": {
    "desc": "Servo channels [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_PC_SRV_RT": {
    "desc": "Servo command output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D3_PC_ECU_ID": {
    "desc": "ECU Node ID",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_PC_ECU_RT": {
    "desc": "ECU command output rate",
    "range": "1 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D3_UC_NODE": {
    "desc": "Own node ID",
    "range": "1 - 125",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_SRV_BM": {
    "desc": "Output channels to be transmitted as servo over DroneCAN [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16, 16: Servo 17, 17: Servo 18, 18: Servo 19, 19: Servo 20, 20: Servo 21, 21: Servo 22, 22: Servo 23, 23: Servo 24, 24: Servo 25, 25: Servo 26, 26: Servo 27, 27: Servo 28, 28: Servo 29, 29: Servo 30, 30: Servo 31, 31: Servo 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_ESC_BM": {
    "desc": "Output channels to be transmitted as ESC over DroneCAN [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_SRV_RT": {
    "desc": "Servo output rate",
    "range": "1 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D3_UC_OPTION": {
    "desc": "DroneCAN options [Bitmask: 0:ClearDNADatabase,1:IgnoreDNANodeConflicts,2:EnableCanfd,3:IgnoreDNANodeUnhealthy,4:SendServoAsPWM,5:SendGNSS,6:UseHimarkServo,7:HobbyWingESC,8:EnableStats,9:EnableFlexDebug,10:SecondaryAllowExtendedFrames]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_NTF_RT": {
    "desc": "Notify State rate",
    "range": "1 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D3_UC_ESC_OF": {
    "desc": "ESC Output channels offset",
    "range": "0 - 18",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_POOL": {
    "desc": "CAN pool size",
    "range": "1024 - 16384",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_ESC_RV": {
    "desc": "Bitmask for output channels for reversible ESCs over DroneCAN. [Bitmask: 0: ESC 1, 1: ESC 2, 2: ESC 3, 3: ESC 4, 4: ESC 5, 5: ESC 6, 6: ESC 7, 7: ESC 8, 8: ESC 9, 9: ESC 10, 10: ESC 11, 11: ESC 12, 12: ESC 13, 13: ESC 14, 14: ESC 15, 15: ESC 16, 16: ESC 17, 17: ESC 18, 18: ESC 19, 19: ESC 20, 20: ESC 21, 21: ESC 22, 22: ESC 23, 23: ESC 24, 24: ESC 25, 25: ESC 26, 26: ESC 27, 27: ESC 28, 28: ESC 29, 29: ESC 30, 30: ESC 31, 31: ESC 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_RLY_RT": {
    "desc": "DroneCAN relay output rate",
    "range": "0 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "CAN_D3_UC_SER_EN": {
    "desc": "DroneCAN Serial enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S1_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S1_IDX": {
    "desc": "DroneCAN Serial1 index",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S1_BD": {
    "desc": "DroneCAN Serial default baud rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S1_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S2_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S2_IDX": {
    "desc": "Serial port number on remote CAN node",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S2_BD": {
    "desc": "DroneCAN Serial default baud rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S2_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S3_NOD": {
    "desc": "Serial CAN remote node number",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S3_IDX": {
    "desc": "Serial port number on remote CAN node",
    "range": "-1 - 100",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S3_BD": {
    "desc": "Serial baud rate on remote CAN node",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "CAN_D3_UC_S3_PRO": {
    "desc": "Serial protocol of DroneCAN serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P1_DRIVER": {
    "desc": "Index of virtual driver to be used with physical CAN interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P1_BITRATE": {
    "desc": "Bitrate of CAN interface",
    "range": "10000 - 1000000",
    "default": "0",
    "unit": ""
  },
  "CAN_P1_FDBITRATE": {
    "desc": "Bitrate of CANFD interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P1_OPTIONS": {
    "desc": "CAN per-interface options [Bitmask: 0:LogAllFrames]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P2_DRIVER": {
    "desc": "Index of virtual driver to be used with physical CAN interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P2_BITRATE": {
    "desc": "Bitrate of CAN interface",
    "range": "10000 - 1000000",
    "default": "0",
    "unit": ""
  },
  "CAN_P2_FDBITRATE": {
    "desc": "Bitrate of CANFD interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P2_OPTIONS": {
    "desc": "CAN per-interface options [Bitmask: 0:LogAllFrames]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P3_DRIVER": {
    "desc": "Index of virtual driver to be used with physical CAN interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P3_BITRATE": {
    "desc": "Bitrate of CAN interface",
    "range": "10000 - 1000000",
    "default": "0",
    "unit": ""
  },
  "CAN_P3_FDBITRATE": {
    "desc": "Bitrate of CANFD interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_P3_OPTIONS": {
    "desc": "CAN per-interface options [Bitmask: 0:LogAllFrames]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_SLCAN_CPORT": {
    "desc": "SLCAN Route",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_SLCAN_SERNUM": {
    "desc": "SLCAN Serial Port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CAN_SLCAN_TIMOUT": {
    "desc": "SLCAN Timeout",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CAN_SLCAN_SDELAY": {
    "desc": "SLCAN Start Delay",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "CC_TYPE": {
    "desc": "Custom control type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CC_AXIS_MASK": {
    "desc": "Custom Controller bitmask [Bitmask: 0:Roll, 1:Pitch, 2:Yaw]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CHUTE_ENABLED": {
    "desc": "Parachute release enabled or disabled",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CHUTE_TYPE": {
    "desc": "Parachute release mechanism type (relay or servo)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CHUTE_SERVO_ON": {
    "desc": "Parachute Servo ON PWM value",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "CHUTE_SERVO_OFF": {
    "desc": "Servo OFF PWM value",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "CHUTE_ALT_MIN": {
    "desc": "Parachute min altitude in meters above home",
    "range": "0 - 32000",
    "default": "0",
    "unit": "m"
  },
  "CHUTE_DELAY_MS": {
    "desc": "Parachute release delay",
    "range": "0 - 5000",
    "default": "0",
    "unit": "ms"
  },
  "CHUTE_CRT_SINK": {
    "desc": "Critical sink speed rate in m/s to trigger emergency parachute",
    "range": "0 - 15",
    "default": "0",
    "unit": "m/s"
  },
  "CHUTE_OPTIONS": {
    "desc": "Parachute options [Bitmask: 0:hold open forever after release,1:skip disarm before parachute release]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CIRCLE_RADIUS": {
    "desc": "Circle Radius",
    "range": "0 - 200000",
    "default": "0",
    "unit": "cm"
  },
  "CIRCLE_RATE": {
    "desc": "Circle rate",
    "range": "-90 - 90",
    "default": "0",
    "unit": "deg/s"
  },
  "CIRCLE_OPTIONS": {
    "desc": "Circle options [Bitmask: 0:manual control, 1:face direction of travel, 2:Start at center rather than on perimeter, 3:Make Mount ROI the center of the circle]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_OFS_X": {
    "desc": "Compass offsets in milligauss on the X axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_OFS_Y": {
    "desc": "Compass offsets in milligauss on the Y axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_OFS_Z": {
    "desc": "Compass offsets in milligauss on the Z axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_DEC": {
    "desc": "Compass declination",
    "range": "-3.142 - 3.142",
    "default": "0",
    "unit": "rad"
  },
  "COMPASS_LEARN": {
    "desc": "Learn compass offsets automatically",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_USE": {
    "desc": "Use compass for yaw",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_AUTODEC": {
    "desc": "Auto Declination",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_MOTCT": {
    "desc": "Motor interference compensation type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_MOT_X": {
    "desc": "Motor interference compensation for body frame X axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_MOT_Y": {
    "desc": "Motor interference compensation for body frame Y axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_MOT_Z": {
    "desc": "Motor interference compensation for body frame Z axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_ORIENT": {
    "desc": "Compass orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_EXTERNAL": {
    "desc": "Compass is attached via an external cable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_OFS2_X": {
    "desc": "Compass2 offsets in milligauss on the X axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_OFS2_Y": {
    "desc": "Compass2 offsets in milligauss on the Y axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_OFS2_Z": {
    "desc": "Compass2 offsets in milligauss on the Z axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_MOT2_X": {
    "desc": "Motor interference compensation to compass2 for body frame X axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_MOT2_Y": {
    "desc": "Motor interference compensation to compass2 for body frame Y axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_MOT2_Z": {
    "desc": "Motor interference compensation to compass2 for body frame Z axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_OFS3_X": {
    "desc": "Compass3 offsets in milligauss on the X axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_OFS3_Y": {
    "desc": "Compass3 offsets in milligauss on the Y axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_OFS3_Z": {
    "desc": "Compass3 offsets in milligauss on the Z axis",
    "range": "-400 - 400",
    "default": "0",
    "unit": "mGauss"
  },
  "COMPASS_MOT3_X": {
    "desc": "Motor interference compensation to compass3 for body frame X axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_MOT3_Y": {
    "desc": "Motor interference compensation to compass3 for body frame Y axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_MOT3_Z": {
    "desc": "Motor interference compensation to compass3 for body frame Z axis",
    "range": "-1000 - 1000",
    "default": "0",
    "unit": "mGauss/A"
  },
  "COMPASS_DEV_ID": {
    "desc": "Compass device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DEV_ID2": {
    "desc": "Compass2 device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DEV_ID3": {
    "desc": "Compass3 device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_USE2": {
    "desc": "Compass2 used for yaw",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ORIENT2": {
    "desc": "Compass2 orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_EXTERN2": {
    "desc": "Compass2 is attached via an external cable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_USE3": {
    "desc": "Compass3 used for yaw",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ORIENT3": {
    "desc": "Compass3 orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_EXTERN3": {
    "desc": "Compass3 is attached via an external cable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA_X": {
    "desc": "Compass soft-iron diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA_Y": {
    "desc": "Compass soft-iron diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA_Z": {
    "desc": "Compass soft-iron diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI_X": {
    "desc": "Compass soft-iron off-diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI_Y": {
    "desc": "Compass soft-iron off-diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI_Z": {
    "desc": "Compass soft-iron off-diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA2_X": {
    "desc": "Compass2 soft-iron diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA2_Y": {
    "desc": "Compass2 soft-iron diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA2_Z": {
    "desc": "Compass2 soft-iron diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI2_X": {
    "desc": "Compass2 soft-iron off-diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI2_Y": {
    "desc": "Compass2 soft-iron off-diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI2_Z": {
    "desc": "Compass2 soft-iron off-diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA3_X": {
    "desc": "Compass3 soft-iron diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA3_Y": {
    "desc": "Compass3 soft-iron diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DIA3_Z": {
    "desc": "Compass3 soft-iron diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI3_X": {
    "desc": "Compass3 soft-iron off-diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI3_Y": {
    "desc": "Compass3 soft-iron off-diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ODI3_Z": {
    "desc": "Compass3 soft-iron off-diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_CAL_FIT": {
    "desc": "Compass calibration fitness",
    "range": "4 - 32",
    "default": "0",
    "unit": ""
  },
  "COMPASS_OFFS_MAX": {
    "desc": "Compass maximum offset",
    "range": "500 - 3000",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DISBLMSK": {
    "desc": "Compass disable driver type mask [Bitmask: 0:HMC5883,1:LSM303D,2:AK8963,3:BMM150,4:LSM9DS1,5:LIS3MDL,6:AK0991x,7:IST8310,8:ICM20948,9:MMC3416,11:DroneCAN,12:QMC5883,14:MAG3110,15:IST8308,16:RM3100,17:MSP,18:ExternalAHRS,19:MMC5XX3,20:QMC5883P,21:BMM350,22:IIS2MDC,23:LIS2MDL]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_FLTR_RNG": {
    "desc": "Range in which sample is accepted",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "COMPASS_AUTO_ROT": {
    "desc": "Automatically check orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PRIO1_ID": {
    "desc": "Compass device id with 1st order priority",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PRIO2_ID": {
    "desc": "Compass device id with 2nd order priority",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PRIO3_ID": {
    "desc": "Compass device id with 3rd order priority",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_ENABLE": {
    "desc": "Enable Compass",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_SCALE": {
    "desc": "Compass1 scale factor",
    "range": "0 - 1.3",
    "default": "0",
    "unit": ""
  },
  "COMPASS_SCALE2": {
    "desc": "Compass2 scale factor",
    "range": "0 - 1.3",
    "default": "0",
    "unit": ""
  },
  "COMPASS_SCALE3": {
    "desc": "Compass3 scale factor",
    "range": "0 - 1.3",
    "default": "0",
    "unit": ""
  },
  "COMPASS_OPTIONS": {
    "desc": "Compass options [Bitmask: 0:CalRequireGPS, 1: Allow missing DroneCAN compasses to be automaticaly replaced (calibration still required)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DEV_ID4": {
    "desc": "Compass4 device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DEV_ID5": {
    "desc": "Compass5 device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DEV_ID6": {
    "desc": "Compass6 device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DEV_ID7": {
    "desc": "Compass7 device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_DEV_ID8": {
    "desc": "Compass8 device id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_CUS_ROLL": {
    "desc": "Custom orientation roll offset",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "COMPASS_CUS_PIT": {
    "desc": "Custom orientation pitch offset",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "COMPASS_CUS_YAW": {
    "desc": "Custom orientation yaw offset",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "COMPASS_PMOT_EN": {
    "desc": "per-motor compass correction enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT_EXP": {
    "desc": "per-motor exponential correction",
    "range": "0 - 2",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT1_X": {
    "desc": "Compass per-motor1 X",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT1_Y": {
    "desc": "Compass per-motor1 Y",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT1_Z": {
    "desc": "Compass per-motor1 Z",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT2_X": {
    "desc": "Compass per-motor2 X",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT2_Y": {
    "desc": "Compass per-motor2 Y",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT2_Z": {
    "desc": "Compass per-motor2 Z",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT3_X": {
    "desc": "Compass per-motor3 X",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT3_Y": {
    "desc": "Compass per-motor3 Y",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT3_Z": {
    "desc": "Compass per-motor3 Z",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT4_X": {
    "desc": "Compass per-motor4 X",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT4_Y": {
    "desc": "Compass per-motor4 Y",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "COMPASS_PMOT4_Z": {
    "desc": "Compass per-motor4 Z",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CUST_ROT_ENABLE": {
    "desc": "Enable Custom rotations",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "CUST_ROT1_ROLL": {
    "desc": "Custom roll",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "CUST_ROT1_PITCH": {
    "desc": "Custom pitch",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "CUST_ROT1_YAW": {
    "desc": "Custom yaw",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "CUST_ROT2_ROLL": {
    "desc": "Custom roll",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "CUST_ROT2_PITCH": {
    "desc": "Custom pitch",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "CUST_ROT2_YAW": {
    "desc": "Custom yaw",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "DDS_ENABLE": {
    "desc": "DDS enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DDS_UDP_PORT": {
    "desc": "DDS UDP port",
    "range": "1 - 65535",
    "default": "0",
    "unit": ""
  },
  "DDS_DOMAIN_ID": {
    "desc": "DDS DOMAIN ID",
    "range": "0 - 232",
    "default": "0",
    "unit": ""
  },
  "DDS_TIMEOUT_MS": {
    "desc": "DDS ping timeout",
    "range": "1 - 10000",
    "default": "0",
    "unit": "ms"
  },
  "DDS_MAX_RETRY": {
    "desc": "DDS ping max attempts",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "DDS_IP0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "DDS_IP1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "DDS_IP2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "DDS_IP3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "DID_ENABLE": {
    "desc": "Enable ODID subsystem",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DID_MAVPORT": {
    "desc": "MAVLink serial port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DID_CANDRIVER": {
    "desc": "DroneCAN driver number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DID_OPTIONS": {
    "desc": "OpenDroneID options [Bitmask: 0:EnforcePreArmChecks, 1:AllowNonGPSPosition, 2:LockUASIDOnFirstBasicIDRx]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "DID_BARO_ACC": {
    "desc": "Barometer vertical accuraacy",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "EAHRS_TYPE": {
    "desc": "AHRS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EAHRS_RATE": {
    "desc": "AHRS data rate",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "EAHRS_OPTIONS": {
    "desc": "External AHRS options [Bitmask: 0:Vector Nav use uncompensated values for accel gyro and mag.]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EAHRS_SENSORS": {
    "desc": "External AHRS sensors [Bitmask: 0:GPS,1:IMU,2:Baro,3:Compass]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EAHRS_LOG_RATE": {
    "desc": "AHRS logging rate",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "EFI_TYPE": {
    "desc": "EFI communication type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_COEF1": {
    "desc": "EFI Calibration Coefficient 1",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "EFI_COEF2": {
    "desc": "EFI Calibration Coefficient 2",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "EFI_FUEL_DENS": {
    "desc": "ECU Fuel Density",
    "range": "0 - 10000",
    "default": "0",
    "unit": "kg/m/m/m"
  },
  "EFI_THRLIN_EN": {
    "desc": "Enable throttle linearisation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EFI_THRLIN_COEF1": {
    "desc": "Throttle linearisation - First Order",
    "range": "-1 - 1",
    "default": "0",
    "unit": ""
  },
  "EFI_THRLIN_COEF2": {
    "desc": "Throttle linearisation - Second Order",
    "range": "-1 - 1",
    "default": "0",
    "unit": ""
  },
  "EFI_THRLIN_COEF3": {
    "desc": "Throttle linearisation - Third Order",
    "range": "-1 - 1",
    "default": "0",
    "unit": ""
  },
  "EFI_THRLIN_OFS": {
    "desc": "throttle linearization offset",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "EK2_ENABLE": {
    "desc": "Enable EKF2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_GPS_TYPE": {
    "desc": "GPS mode control",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_VELNE_M_NSE": {
    "desc": "GPS horizontal velocity measurement noise (m/s)",
    "range": "0.05 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK2_VELD_M_NSE": {
    "desc": "GPS vertical velocity measurement noise (m/s)",
    "range": "0.05 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK2_VEL_I_GATE": {
    "desc": "GPS velocity innovation gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_POSNE_M_NSE": {
    "desc": "GPS horizontal position measurement noise (m)",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK2_POS_I_GATE": {
    "desc": "GPS position measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_GLITCH_RAD": {
    "desc": "GPS glitch radius gate size (m)",
    "range": "10 - 100",
    "default": "0",
    "unit": "m"
  },
  "EK2_ALT_SOURCE": {
    "desc": "Primary altitude sensor source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_ALT_M_NSE": {
    "desc": "Altitude measurement noise (m)",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK2_HGT_I_GATE": {
    "desc": "Height measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_HGT_DELAY": {
    "desc": "Height measurement delay (msec)",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "EK2_MAG_M_NSE": {
    "desc": "Magnetometer measurement noise (Gauss)",
    "range": "0.01 - 0.5",
    "default": "0",
    "unit": "Gauss"
  },
  "EK2_MAG_CAL": {
    "desc": "Magnetometer default fusion mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_MAG_I_GATE": {
    "desc": "Magnetometer measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_EAS_M_NSE": {
    "desc": "Equivalent airspeed measurement noise (m/s)",
    "range": "0.5 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK2_EAS_I_GATE": {
    "desc": "Airspeed measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_RNG_M_NSE": {
    "desc": "Range finder measurement noise (m)",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK2_RNG_I_GATE": {
    "desc": "Range finder measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_MAX_FLOW": {
    "desc": "Maximum valid optical flow rate",
    "range": "1.0 - 4.0",
    "default": "0",
    "unit": "rad/s"
  },
  "EK2_FLOW_M_NSE": {
    "desc": "Optical flow measurement noise (rad/s)",
    "range": "0.05 - 1.0",
    "default": "0",
    "unit": "rad/s"
  },
  "EK2_FLOW_I_GATE": {
    "desc": "Optical Flow measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_FLOW_DELAY": {
    "desc": "Optical Flow measurement delay (msec)",
    "range": "0 - 127",
    "default": "0",
    "unit": "ms"
  },
  "EK2_GYRO_P_NSE": {
    "desc": "Rate gyro noise (rad/s)",
    "range": "0.0001 - 0.1",
    "default": "0",
    "unit": "rad/s"
  },
  "EK2_ACC_P_NSE": {
    "desc": "Accelerometer noise (m/s^2)",
    "range": "0.01 - 1.0",
    "default": "0",
    "unit": "m/s/s"
  },
  "EK2_GBIAS_P_NSE": {
    "desc": "Rate gyro bias stability (rad/s/s)",
    "range": "0.00001 - 0.001",
    "default": "0",
    "unit": "rad/s/s"
  },
  "EK2_GSCL_P_NSE": {
    "desc": "Rate gyro scale factor stability (1/s)",
    "range": "0.000001 - 0.001",
    "default": "0",
    "unit": "Hz"
  },
  "EK2_ABIAS_P_NSE": {
    "desc": "Accelerometer bias stability (m/s^3)",
    "range": "0.00001 - 0.005",
    "default": "0",
    "unit": "m/s/s/s"
  },
  "EK2_WIND_P_NSE": {
    "desc": "Wind velocity process noise (m/s^2)",
    "range": "0.01 - 1.0",
    "default": "0",
    "unit": "m/s/s"
  },
  "EK2_WIND_PSCALE": {
    "desc": "Height rate to wind process noise scaler",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "EK2_GPS_CHECK": {
    "desc": "GPS preflight check [Bitmask: 0:NSats,1:HDoP,2:speed error,3:position error,4:yaw error,5:pos drift,6:vert speed,7:horiz speed]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_IMU_MASK": {
    "desc": "Bitmask of active IMUs [Bitmask: 0:FirstIMU,1:SecondIMU,2:ThirdIMU,3:FourthIMU,4:FifthIMU,5:SixthIMU]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_CHECK_SCALE": {
    "desc": "GPS accuracy check scaler (%)",
    "range": "50 - 200",
    "default": "0",
    "unit": "%"
  },
  "EK2_NOAID_M_NSE": {
    "desc": "Non-GPS operation position uncertainty (m)",
    "range": "0.5 - 50.0",
    "default": "0",
    "unit": "m"
  },
  "EK2_YAW_M_NSE": {
    "desc": "Yaw measurement noise (rad)",
    "range": "0.05 - 1.0",
    "default": "0",
    "unit": "rad"
  },
  "EK2_YAW_I_GATE": {
    "desc": "Yaw measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_TAU_OUTPUT": {
    "desc": "Output complementary filter time constant (centi-sec)",
    "range": "10 - 50",
    "default": "0",
    "unit": "cs"
  },
  "EK2_MAGE_P_NSE": {
    "desc": "Earth magnetic field process noise (gauss/s)",
    "range": "0.00001 - 0.01",
    "default": "0",
    "unit": "Gauss/s"
  },
  "EK2_MAGB_P_NSE": {
    "desc": "Body magnetic field process noise (gauss/s)",
    "range": "0.00001 - 0.01",
    "default": "0",
    "unit": "Gauss/s"
  },
  "EK2_RNG_USE_HGT": {
    "desc": "Range finder switch height percentage",
    "range": "-1 - 70",
    "default": "0",
    "unit": "%"
  },
  "EK2_TERR_GRAD": {
    "desc": "Maximum terrain gradient",
    "range": "0 - 0.2",
    "default": "0",
    "unit": ""
  },
  "EK2_BCN_M_NSE": {
    "desc": "Range beacon measurement noise (m)",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK2_BCN_I_GTE": {
    "desc": "Range beacon measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK2_BCN_DELAY": {
    "desc": "Range beacon measurement delay (msec)",
    "range": "0 - 127",
    "default": "0",
    "unit": "ms"
  },
  "EK2_RNG_USE_SPD": {
    "desc": "Range finder max ground speed",
    "range": "2.0 - 6.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK2_MAG_MASK": {
    "desc": "Bitmask of active EKF cores that will always use heading fusion [Bitmask: 0:FirstEKF,1:SecondEKF,2:ThirdEKF,3:FourthEKF,4:FifthEKF,5:SixthEKF]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_OGN_HGT_MASK": {
    "desc": "Bitmask control of EKF reference height correction [Bitmask: 0:Correct when using Baro height,1:Correct when using range finder height,2:Apply corrections to local position]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_FLOW_USE": {
    "desc": "Optical flow use bitmask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_MAG_EF_LIM": {
    "desc": "EarthField error limit",
    "range": "0 - 500",
    "default": "0",
    "unit": "mGauss"
  },
  "EK2_HRT_FILT": {
    "desc": "Height rate filter crossover frequency",
    "range": "0.1 - 30.0",
    "default": "0",
    "unit": "Hz"
  },
  "EK2_GSF_RUN_MASK": {
    "desc": "Bitmask of which EKF-GSF yaw estimators run [Bitmask: 0:FirstEKF,1:SecondEKF,2:ThirdEKF,3:FourthEKF,4:FifthEKF,5:SixthEKF]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_GSF_USE_MASK": {
    "desc": "Bitmask of which EKF-GSF yaw estimators are used [Bitmask: 0:FirstEKF,1:SecondEKF,2:ThirdEKF,3:FourthEKF,4:FifthEKF,5:SixthEKF]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK2_GSF_RST_MAX": {
    "desc": "Maximum number of resets to the EKF-GSF yaw estimate allowed",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "EK2_OPTIONS": {
    "desc": "Optional EKF behaviour [Bitmask: 0:DisableExternalNavigation]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_ENABLE": {
    "desc": "Enable EKF3",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_VELNE_M_NSE": {
    "desc": "GPS horizontal velocity measurement noise (m/s)",
    "range": "0.05 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK3_VELD_M_NSE": {
    "desc": "GPS vertical velocity measurement noise (m/s)",
    "range": "0.05 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK3_VEL_I_GATE": {
    "desc": "GPS velocity innovation gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_POSNE_M_NSE": {
    "desc": "GPS horizontal position measurement noise (m)",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK3_POS_I_GATE": {
    "desc": "GPS position measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_GLITCH_RAD": {
    "desc": "GPS glitch radius gate size (m)",
    "range": "10 - 100",
    "default": "0",
    "unit": "m"
  },
  "EK3_ALT_M_NSE": {
    "desc": "Altitude measurement noise (m)",
    "range": "0.1 - 100.0",
    "default": "0",
    "unit": "m"
  },
  "EK3_HGT_I_GATE": {
    "desc": "Height measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_HGT_DELAY": {
    "desc": "Height measurement delay (msec)",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "EK3_MAG_M_NSE": {
    "desc": "Magnetometer measurement noise (Gauss)",
    "range": "0.01 - 0.5",
    "default": "0",
    "unit": "Gauss"
  },
  "EK3_MAG_CAL": {
    "desc": "Magnetometer default fusion mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_MAG_I_GATE": {
    "desc": "Magnetometer measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_EAS_M_NSE": {
    "desc": "Equivalent airspeed measurement noise (m/s)",
    "range": "0.5 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK3_EAS_I_GATE": {
    "desc": "Airspeed measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_RNG_M_NSE": {
    "desc": "Range finder measurement noise (m)",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK3_RNG_I_GATE": {
    "desc": "Range finder measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_FLOW_MAX": {
    "desc": "Optical flow rate maximum",
    "range": "1.0 - 4.0",
    "default": "0",
    "unit": "rad/s"
  },
  "EK3_FLOW_M_NSE": {
    "desc": "Optical flow measurement noise (rad/s)",
    "range": "0.05 - 1.0",
    "default": "0",
    "unit": "rad/s"
  },
  "EK3_FLOW_I_GATE": {
    "desc": "Optical Flow measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_FLOW_DELAY": {
    "desc": "Optical Flow measurement delay (msec)",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "EK3_GYRO_P_NSE": {
    "desc": "Rate gyro noise (rad/s)",
    "range": "0.0001 - 0.1",
    "default": "0",
    "unit": "rad/s"
  },
  "EK3_ACC_P_NSE": {
    "desc": "Accelerometer noise (m/s^2)",
    "range": "0.01 - 1.0",
    "default": "0",
    "unit": "m/s/s"
  },
  "EK3_GBIAS_P_NSE": {
    "desc": "Rate gyro bias stability (rad/s/s)",
    "range": "0.00001 - 0.001",
    "default": "0",
    "unit": "rad/s/s"
  },
  "EK3_ABIAS_P_NSE": {
    "desc": "Accelerometer bias stability (m/s^3)",
    "range": "0.00001 - 0.02",
    "default": "0",
    "unit": "m/s/s/s"
  },
  "EK3_WIND_P_NSE": {
    "desc": "Wind velocity process noise (m/s^2)",
    "range": "0.01 - 2.0",
    "default": "0",
    "unit": "m/s/s"
  },
  "EK3_WIND_PSCALE": {
    "desc": "Height rate to wind process noise scaler",
    "range": "0.0 - 2.0",
    "default": "0",
    "unit": ""
  },
  "EK3_GPS_CHECK": {
    "desc": "GPS preflight check [Bitmask: 0:NSats,1:HDoP,2:speed error,3:position error,4:yaw error,5:pos drift,6:vert speed,7:horiz speed]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_IMU_MASK": {
    "desc": "Bitmask of active IMUs [Bitmask: 0:FirstIMU,1:SecondIMU,2:ThirdIMU,3:FourthIMU,4:FifthIMU,5:SixthIMU]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_CHECK_SCALE": {
    "desc": "GPS accuracy check scaler (%)",
    "range": "50 - 200",
    "default": "0",
    "unit": "%"
  },
  "EK3_NOAID_M_NSE": {
    "desc": "Non-GPS operation position uncertainty (m)",
    "range": "0.5 - 50.0",
    "default": "0",
    "unit": "m"
  },
  "EK3_BETA_MASK": {
    "desc": "Bitmask controlling sidelip angle fusion [Bitmask: 0:Always,1:WhenNoYawSensor]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_YAW_M_NSE": {
    "desc": "Yaw measurement noise (rad)",
    "range": "0.05 - 1.0",
    "default": "0",
    "unit": "rad"
  },
  "EK3_YAW_I_GATE": {
    "desc": "Yaw measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_TAU_OUTPUT": {
    "desc": "Output complementary filter time constant (centi-sec)",
    "range": "10 - 50",
    "default": "0",
    "unit": "cs"
  },
  "EK3_MAGE_P_NSE": {
    "desc": "Earth magnetic field process noise (gauss/s)",
    "range": "0.00001 - 0.01",
    "default": "0",
    "unit": "Gauss/s"
  },
  "EK3_MAGB_P_NSE": {
    "desc": "Body magnetic field process noise (gauss/s)",
    "range": "0.00001 - 0.01",
    "default": "0",
    "unit": "Gauss/s"
  },
  "EK3_RNG_USE_HGT": {
    "desc": "Range finder switch height percentage",
    "range": "-1 - 70",
    "default": "0",
    "unit": "%"
  },
  "EK3_TERR_GRAD": {
    "desc": "Maximum terrain gradient",
    "range": "0 - 0.2",
    "default": "0",
    "unit": ""
  },
  "EK3_BCN_M_NSE": {
    "desc": "Range beacon measurement noise (m)",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK3_BCN_I_GTE": {
    "desc": "Range beacon measurement gate size",
    "range": "100 - 1000",
    "default": "0",
    "unit": ""
  },
  "EK3_BCN_DELAY": {
    "desc": "Range beacon measurement delay (msec)",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "EK3_RNG_USE_SPD": {
    "desc": "Range finder max ground speed",
    "range": "2.0 - 6.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK3_ACC_BIAS_LIM": {
    "desc": "Accelerometer bias limit",
    "range": "0.5 - 2.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "EK3_MAG_MASK": {
    "desc": "Bitmask of active EKF cores that will always use heading fusion [Bitmask: 0:FirstEKF,1:SecondEKF,2:ThirdEKF,3:FourthEKF,4:FifthEKF,5:SixthEKF]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_OGN_HGT_MASK": {
    "desc": "Bitmask control of EKF reference height correction [Bitmask: 0:Correct when using Baro height,1:Correct when using range finder height,2:Apply corrections to local position]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_VIS_VERR_MIN": {
    "desc": "Visual odometry minimum velocity error",
    "range": "0.05 - 0.5",
    "default": "0",
    "unit": "m/s"
  },
  "EK3_VIS_VERR_MAX": {
    "desc": "Visual odometry maximum velocity error",
    "range": "0.5 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK3_WENC_VERR": {
    "desc": "Wheel odometry velocity error",
    "range": "0.01 - 1.0",
    "default": "0",
    "unit": "m/s"
  },
  "EK3_FLOW_USE": {
    "desc": "Optical flow use bitmask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_HRT_FILT": {
    "desc": "Height rate filter crossover frequency",
    "range": "0.1 - 30.0",
    "default": "0",
    "unit": "Hz"
  },
  "EK3_MAG_EF_LIM": {
    "desc": "EarthField error limit",
    "range": "0 - 500",
    "default": "0",
    "unit": "mGauss"
  },
  "EK3_GSF_RUN_MASK": {
    "desc": "Bitmask of which EKF-GSF yaw estimators run [Bitmask: 0:FirstEKF,1:SecondEKF,2:ThirdEKF,3:FourthEKF,4:FifthEKF,5:SixthEKF]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_GSF_USE_MASK": {
    "desc": "Bitmask of which EKF-GSF yaw estimators are used [Bitmask: 0:FirstEKF,1:SecondEKF,2:ThirdEKF,3:FourthEKF,4:FifthEKF,5:SixthEKF]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_GSF_RST_MAX": {
    "desc": "Maximum number of resets to the EKF-GSF yaw estimate allowed",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "EK3_ERR_THRESH": {
    "desc": "EKF3 Lane Relative Error Sensitivity Threshold",
    "range": "0.05 - 1",
    "default": "0",
    "unit": ""
  },
  "EK3_AFFINITY": {
    "desc": "EKF3 Sensor Affinity Options [Bitmask: 0:EnableGPSAffinity,1:EnableBaroAffinity,2:EnableCompassAffinity,3:EnableAirspeedAffinity]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_DRAG_BCOEF_X": {
    "desc": "Ballistic coefficient for X axis drag",
    "range": "0.0 - 1000.0",
    "default": "0",
    "unit": "kg/m/m"
  },
  "EK3_DRAG_BCOEF_Y": {
    "desc": "Ballistic coefficient for Y axis drag",
    "range": "50.0 - 1000.0",
    "default": "0",
    "unit": "kg/m/m"
  },
  "EK3_DRAG_M_NSE": {
    "desc": "Observation noise for drag acceleration",
    "range": "0.1 - 2.0",
    "default": "0",
    "unit": "m/s/s"
  },
  "EK3_DRAG_MCOEF": {
    "desc": "Momentum coefficient for propeller drag",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": "1/s"
  },
  "EK3_OGNM_TEST_SF": {
    "desc": "On ground not moving test scale factor",
    "range": "1.0 - 10.0",
    "default": "0",
    "unit": ""
  },
  "EK3_GND_EFF_DZ": {
    "desc": "Baro height ground effect dead zone",
    "range": "0.0 - 10.0",
    "default": "0",
    "unit": ""
  },
  "EK3_PRIMARY": {
    "desc": "Primary core number",
    "range": "0 - 2",
    "default": "0",
    "unit": ""
  },
  "EK3_LOG_LEVEL": {
    "desc": "Logging Level",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "EK3_GPS_VACC_MAX": {
    "desc": "GPS vertical accuracy threshold",
    "range": "0.0 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "EK3_OPTIONS": {
    "desc": "Optional EKF behaviour [Bitmask: 0:JammingExpected, 1:ManualLaneSwitching, 2:Optflow may use terrain alt]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC1_POSXY": {
    "desc": "Position Horizontal Source (Primary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC1_VELXY": {
    "desc": "Velocity Horizontal Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC1_POSZ": {
    "desc": "Position Vertical Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC1_VELZ": {
    "desc": "Velocity Vertical Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC1_YAW": {
    "desc": "Yaw Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC2_POSXY": {
    "desc": "Position Horizontal Source (Secondary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC2_VELXY": {
    "desc": "Velocity Horizontal Source (Secondary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC2_POSZ": {
    "desc": "Position Vertical Source (Secondary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC2_VELZ": {
    "desc": "Velocity Vertical Source (Secondary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC2_YAW": {
    "desc": "Yaw Source (Secondary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC3_POSXY": {
    "desc": "Position Horizontal Source (Tertiary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC3_VELXY": {
    "desc": "Velocity Horizontal Source (Tertiary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC3_POSZ": {
    "desc": "Position Vertical Source (Tertiary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC3_VELZ": {
    "desc": "Velocity Vertical Source (Tertiary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC3_YAW": {
    "desc": "Yaw Source (Tertiary)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "EK3_SRC_OPTIONS": {
    "desc": "EKF Source Options [Bitmask: 0:FuseAllVelocities, 1:AlignExtNavPosWhenUsingOptFlow, 3: UsePerCoreEKFSources]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ESC_TLM_MAV_OFS": {
    "desc": "ESC Telemetry mavlink offset",
    "range": "0 - 31",
    "default": "0",
    "unit": ""
  },
  "FENCE_ENABLE": {
    "desc": "Fence enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FENCE_TYPE": {
    "desc": "Fence Type [Bitmask: 0:Max altitude,1:Circle Centered on Home,2:Inclusion/Exclusion Circles+Polygons,3:Min altitude]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FENCE_ACTION": {
    "desc": "Fence Action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FENCE_ALT_MAX": {
    "desc": "Fence Maximum Altitude",
    "range": "10 - 1000",
    "default": "0",
    "unit": "m"
  },
  "FENCE_RADIUS": {
    "desc": "Circular Fence Radius",
    "range": "30 - 10000",
    "default": "0",
    "unit": "m"
  },
  "FENCE_MARGIN": {
    "desc": "Fence Margin",
    "range": "1 - 10",
    "default": "0",
    "unit": "m"
  },
  "FENCE_TOTAL": {
    "desc": "Fence polygon point total",
    "range": "1 - 20",
    "default": "0",
    "unit": ""
  },
  "FENCE_ALT_MIN": {
    "desc": "Fence Minimum Altitude",
    "range": "-100 - 100",
    "default": "0",
    "unit": "m"
  },
  "FENCE_AUTOENABLE": {
    "desc": "Fence Auto-Enable",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "FENCE_OPTIONS": {
    "desc": "Fence options [Bitmask: 0:Disable mode change following fence action until fence breach is cleared, 1:Allow union of inclusion areas, 2:Notify on margin breaches]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FENCE_NTF_FREQ": {
    "desc": "Fence margin notification frequency in hz",
    "range": "0 - 10",
    "default": "0",
    "unit": "Hz"
  },
  "FENCE_MARGIN_XY": {
    "desc": "Fence Horizontal Margin",
    "range": "0 - 50",
    "default": "0",
    "unit": "m"
  },
  "FFT_ENABLE": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FFT_MINHZ": {
    "desc": "Minimum Frequency",
    "range": "20 - 400",
    "default": "0",
    "unit": "Hz"
  },
  "FFT_MAXHZ": {
    "desc": "Maximum Frequency",
    "range": "20 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FFT_SAMPLE_MODE": {
    "desc": "Sample Mode",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "FFT_WINDOW_SIZE": {
    "desc": "FFT window size",
    "range": "32 - 1024",
    "default": "0",
    "unit": ""
  },
  "FFT_WINDOW_OLAP": {
    "desc": "FFT window overlap",
    "range": "0 - 0.9",
    "default": "0",
    "unit": ""
  },
  "FFT_FREQ_HOVER": {
    "desc": "FFT learned hover frequency",
    "range": "0 - 250",
    "default": "0",
    "unit": ""
  },
  "FFT_THR_REF": {
    "desc": "FFT learned thrust reference",
    "range": "0.01 - 0.9",
    "default": "0",
    "unit": ""
  },
  "FFT_SNR_REF": {
    "desc": "FFT SNR reference threshold",
    "range": "0.0 - 100.0",
    "default": "0",
    "unit": ""
  },
  "FFT_ATT_REF": {
    "desc": "FFT attenuation for bandwidth calculation",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "FFT_BW_HOVER": {
    "desc": "FFT learned bandwidth at hover",
    "range": "0 - 200",
    "default": "0",
    "unit": ""
  },
  "FFT_HMNC_FIT": {
    "desc": "FFT harmonic fit frequency threshold",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "FFT_HMNC_PEAK": {
    "desc": "FFT harmonic peak target",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FFT_NUM_FRAMES": {
    "desc": "FFT output frames to retain and average",
    "range": "0 - 8",
    "default": "0",
    "unit": ""
  },
  "FFT_OPTIONS": {
    "desc": "FFT options [Bitmask: 0:Enable post-filter FFT,1:Check motor noise]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FHLD_XY_P": {
    "desc": "FlowHold P gain",
    "range": "0.1 - 6.0",
    "default": "0",
    "unit": ""
  },
  "FHLD_XY_I": {
    "desc": "FlowHold I gain",
    "range": "0.02 - 1.00",
    "default": "0",
    "unit": ""
  },
  "FHLD_XY_IMAX": {
    "desc": "FlowHold Integrator Max",
    "range": "0 - 4500",
    "default": "0",
    "unit": "cdeg"
  },
  "FHLD_XY_FILT_HZ": {
    "desc": "FlowHold filter on input to control",
    "range": "0 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "FHLD_FLOW_MAX": {
    "desc": "FlowHold Flow Rate Max",
    "range": "0.1 - 2.5",
    "default": "0",
    "unit": ""
  },
  "FHLD_FILT_HZ": {
    "desc": "FlowHold Filter Frequency",
    "range": "1 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "FHLD_QUAL_MIN": {
    "desc": "FlowHold Flow quality minimum",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "FHLD_BRAKE_RATE": {
    "desc": "FlowHold Braking rate",
    "range": "1 - 30",
    "default": "0",
    "unit": "deg/s"
  },
  "FILT1_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT1_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT1_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT1_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FILT2_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT2_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT2_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT2_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FILT3_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT3_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT3_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT3_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FILT4_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT4_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT4_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT4_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FILT5_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT5_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT5_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT5_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FILT6_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT6_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT6_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT6_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FILT7_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT7_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT7_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT7_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FILT8_TYPE": {
    "desc": "Filter Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FILT8_NOTCH_FREQ": {
    "desc": "Notch Filter center frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "FILT8_NOTCH_Q": {
    "desc": "Notch Filter quality factor",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "FILT8_NOTCH_ATT": {
    "desc": "Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "FLOW_TYPE": {
    "desc": "Optical flow sensor type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FLOW_FXSCALER": {
    "desc": "X axis optical flow scale factor correction",
    "range": "-800 - +800",
    "default": "0",
    "unit": ""
  },
  "FLOW_FYSCALER": {
    "desc": "Y axis optical flow scale factor correction",
    "range": "-800 - +800",
    "default": "0",
    "unit": ""
  },
  "FLOW_ORIENT_YAW": {
    "desc": "Flow sensor yaw alignment",
    "range": "-17999 - +18000",
    "default": "0",
    "unit": "cdeg"
  },
  "FLOW_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "FLOW_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "FLOW_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "FLOW_ADDR": {
    "desc": "Address on the bus",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "FLOW_OPTIONS": {
    "desc": "Optical flow options [Bitmask: 0:Roll/Pitch stabilised]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLL_ENABLE": {
    "desc": "Follow enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLL_SYSID": {
    "desc": "Follow target's mavlink system id",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "FOLL_DIST_MAX": {
    "desc": "Follow distance maximum",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "FOLL_OFS_TYPE": {
    "desc": "Follow offset type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLL_OFS_X": {
    "desc": "Follow offsets in meters north/forward",
    "range": "-100 - 100",
    "default": "0",
    "unit": "m"
  },
  "FOLL_OFS_Y": {
    "desc": "Follow offsets in meters east/right",
    "range": "-100 - 100",
    "default": "0",
    "unit": "m"
  },
  "FOLL_OFS_Z": {
    "desc": "Follow offsets in meters down",
    "range": "-100 - 100",
    "default": "0",
    "unit": "m"
  },
  "FOLL_YAW_BEHAVE": {
    "desc": "Follow yaw behaviour",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLL_POS_P": {
    "desc": "Follow position error P gain",
    "range": "0.01 - 1.00",
    "default": "0",
    "unit": ""
  },
  "FOLL_ALT_TYPE": {
    "desc": "Follow altitude type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLL_OPTIONS": {
    "desc": "Follow options",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FOLL_ACCEL_NE": {
    "desc": "Acceleration limit for the horizontal kinematic input shaping",
    "range": "0 - 5",
    "default": "0",
    "unit": "m/s/s"
  },
  "FOLL_JERK_NE": {
    "desc": "Jerk limit for the horizontal kinematic input shaping",
    "range": "0 - 20",
    "default": "0",
    "unit": "m/s/s/s"
  },
  "FOLL_ACCEL_D": {
    "desc": "Acceleration limit for the vertical kinematic input shaping",
    "range": "0 - 2.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "FOLL_JERK_D": {
    "desc": "Jerk limit for the vertical kinematic input shaping",
    "range": "0 - 5",
    "default": "0",
    "unit": "m/s/s/s"
  },
  "FOLL_ACCEL_H": {
    "desc": "Angular acceleration limit for the heading kinematic input shaping",
    "range": "0 - 90",
    "default": "0",
    "unit": "deg/s/s"
  },
  "FOLL_JERK_H": {
    "desc": "Angular jerk limit for the heading kinematic input shaping",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg/s/s/s"
  },
  "FOLL_TIMEOUT": {
    "desc": "Follow timeout",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "FRSKY_UPLINK_ID": {
    "desc": "Uplink sensor id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FRSKY_DNLINK1_ID": {
    "desc": "First downlink sensor id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FRSKY_DNLINK2_ID": {
    "desc": "Second downlink sensor id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FRSKY_DNLINK_ID": {
    "desc": "Default downlink sensor id",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "FRSKY_OPTIONS": {
    "desc": "FRSky Telemetry Options [Bitmask: 0:EnableAirspeedAndGroundspeed]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_TYPE": {
    "desc": "Generator type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_OPTIONS": {
    "desc": "Generator Options [Bitmask: 0:Suppress Maintenance-Required Warnings]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_L_MNT_TIME": {
    "desc": "Seconds until maintenance required",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_L_RUNTIME": {
    "desc": "Total runtime",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_L_IDLE_TH_H": {
    "desc": "High Idle throttle",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_L_IDLE_TH": {
    "desc": "Idle throttle",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_L_RUN_TEMP": {
    "desc": "Run Temperature",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_L_IDLE_TEMP": {
    "desc": "Idle Temperature",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GEN_L_OVER_TEMP": {
    "desc": "Cylinder Head Over Temperature Warning Level",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "GPS_NAVFILTER": {
    "desc": "Navigation filter setting",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_AUTO_SWITCH": {
    "desc": "Automatic Switchover Setting",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_SBAS_MODE": {
    "desc": "SBAS Mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_MIN_ELEV": {
    "desc": "Minimum elevation",
    "range": "-100 - 90",
    "default": "0",
    "unit": "deg"
  },
  "GPS_INJECT_TO": {
    "desc": "Destination for GPS_INJECT_DATA MAVLink packets",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_SBP_LOGMASK": {
    "desc": "Swift Binary Protocol Logging Mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_RAW_DATA": {
    "desc": "Raw data logging",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_SAVE_CFG": {
    "desc": "Save GPS configuration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_AUTO_CONFIG": {
    "desc": "Automatic GPS configuration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_BLEND_MASK": {
    "desc": "Multi GPS Blending Mask [Bitmask: 0:Horiz Pos,1:Vert Pos,2:Speed]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_DRV_OPTIONS": {
    "desc": "driver options [Bitmask: 0:Use UART2 for moving baseline on ublox,1:Use base station for GPS yaw on SBF,2:Use baudrate 115200 on ublox,3:Use dedicated CAN port b/w GPSes for moving baseline,4:Use ellipsoid height instead of AMSL, 5:Override GPS satellite health of L5 band from L1 health, 6:Enable RTCM full parse even for a single channel, 7:Disable automatic full RTCM parsing when RTCM seen on more than one channel]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_PRIMARY": {
    "desc": "Primary GPS",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_TYPE": {
    "desc": "1st GPS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_TYPE2": {
    "desc": "2nd GPS type.Renamed in 4.6 to GPS2_TYPE",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_GNSS_MODE": {
    "desc": "GNSS system configuration [Bitmask: 0:GPS,1:SBAS,2:Galileo,3:Beidou,4:IMES,5:QZSS,6:GLONASS]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_GNSS_MODE2": {
    "desc": "GNSS system configuration. [Bitmask: 0:GPS,1:SBAS,2:Galileo,3:Beidou,4:IMES,5:QZSS,6:GLONASS]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_RATE_MS": {
    "desc": "GPS update rate in milliseconds",
    "range": "50 - 200",
    "default": "0",
    "unit": "ms"
  },
  "GPS_RATE_MS2": {
    "desc": "GPS 2 update rate in milliseconds",
    "range": "50 - 200",
    "default": "0",
    "unit": "ms"
  },
  "GPS_POS1_X": {
    "desc": "Antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_POS1_Y": {
    "desc": "Antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_POS1_Z": {
    "desc": "Antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_POS2_X": {
    "desc": "Antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_POS2_Y": {
    "desc": "Antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_POS2_Z": {
    "desc": "Antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_DELAY_MS": {
    "desc": "GPS delay in milliseconds",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "GPS_DELAY_MS2": {
    "desc": "GPS 2 delay in milliseconds",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "GPS_COM_PORT": {
    "desc": "GPS physical COM port",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "GPS_COM_PORT2": {
    "desc": "GPS physical COM port",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "GPS_CAN_NODEID1": {
    "desc": "GPS Node ID 1",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_CAN_NODEID2": {
    "desc": "GPS Node ID 2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS1_TYPE": {
    "desc": "GPS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS1_GNSS_MODE": {
    "desc": "GNSS system configuration [Bitmask: 0:GPS,1:SBAS,2:Galileo,3:Beidou,4:IMES,5:QZSS,6:GLONASS,7:NAVIC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS1_RATE_MS": {
    "desc": "GPS update rate in milliseconds",
    "range": "50 - 200",
    "default": "0",
    "unit": "ms"
  },
  "GPS1_POS_X": {
    "desc": "Antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS1_POS_Y": {
    "desc": "Antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS1_POS_Z": {
    "desc": "Antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS1_DELAY_MS": {
    "desc": "GPS delay in milliseconds",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "GPS1_COM_PORT": {
    "desc": "GPS physical COM port",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "GPS1_CAN_NODEID": {
    "desc": "Detected CAN Node ID for GPS",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS1_CAN_OVRIDE": {
    "desc": "DroneCAN GPS NODE ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS1_MB_TYPE": {
    "desc": "Moving base type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS1_MB_OFS_X": {
    "desc": "Base antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS1_MB_OFS_Y": {
    "desc": "Base antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS1_MB_OFS_Z": {
    "desc": "Base antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS2_TYPE": {
    "desc": "GPS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS2_GNSS_MODE": {
    "desc": "GNSS system configuration [Bitmask: 0:GPS,1:SBAS,2:Galileo,3:Beidou,4:IMES,5:QZSS,6:GLONASS,7:NAVIC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS2_RATE_MS": {
    "desc": "GPS update rate in milliseconds",
    "range": "50 - 200",
    "default": "0",
    "unit": "ms"
  },
  "GPS2_POS_X": {
    "desc": "Antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS2_POS_Y": {
    "desc": "Antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS2_POS_Z": {
    "desc": "Antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS2_DELAY_MS": {
    "desc": "GPS delay in milliseconds",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "GPS2_COM_PORT": {
    "desc": "GPS physical COM port",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "GPS2_CAN_NODEID": {
    "desc": "Detected CAN Node ID for GPS",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS2_CAN_OVRIDE": {
    "desc": "DroneCAN GPS NODE ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS2_MB_TYPE": {
    "desc": "Moving base type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS2_MB_OFS_X": {
    "desc": "Base antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS2_MB_OFS_Y": {
    "desc": "Base antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS2_MB_OFS_Z": {
    "desc": "Base antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_MB1_TYPE": {
    "desc": "Moving base type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_MB1_OFS_X": {
    "desc": "Base antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_MB1_OFS_Y": {
    "desc": "Base antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_MB1_OFS_Z": {
    "desc": "Base antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_MB2_TYPE": {
    "desc": "Moving base type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GPS_MB2_OFS_X": {
    "desc": "Base antenna X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_MB2_OFS_Y": {
    "desc": "Base antenna Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GPS_MB2_OFS_Z": {
    "desc": "Base antenna Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "GRIP_ENABLE": {
    "desc": "Gripper Enable/Disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GRIP_TYPE": {
    "desc": "Gripper Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "GRIP_GRAB": {
    "desc": "Gripper Grab PWM",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "GRIP_RELEASE": {
    "desc": "Gripper Release PWM",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "GRIP_NEUTRAL": {
    "desc": "Neutral PWM",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "GRIP_REGRAB": {
    "desc": "EPM Gripper Regrab interval",
    "range": "0 - 255",
    "default": "0",
    "unit": "s"
  },
  "GRIP_CAN_ID": {
    "desc": "EPM UAVCAN Hardpoint ID",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "GRIP_AUTOCLOSE": {
    "desc": "Gripper Autoclose time",
    "range": "0.25 - 255",
    "default": "0",
    "unit": "s"
  },
  "H_TAIL_TYPE": {
    "desc": "Tail Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_GYR_GAIN": {
    "desc": "External Gyro Gain",
    "range": "0 - 1000",
    "default": "0",
    "unit": "PWM"
  },
  "H_FLYBAR_MODE": {
    "desc": "Flybar Mode Selector",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_TAIL_SPEED": {
    "desc": "DDVP Tail ESC speed",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_GYR_GAIN_ACRO": {
    "desc": "ACRO External Gyro Gain",
    "range": "0 - 1000",
    "default": "0",
    "unit": "PWM"
  },
  "H_SW_TYPE": {
    "desc": "Swash 1 Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW_COL_DIR": {
    "desc": "Swash 1 Collective Direction",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW_LIN_SVO": {
    "desc": "Linearize Swash 1 Servos",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW_H3_ENABLE": {
    "desc": "Swash 1 H3 Generic Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW_H3_SV1_POS": {
    "desc": "Swash 1 H3 Generic Servo 1 Position",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "H_SW_H3_SV2_POS": {
    "desc": "Swash 1 H3 Generic Servo 2 Position",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "H_SW_H3_SV3_POS": {
    "desc": "Swash 1 H3 Generic Servo 3 Position",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "H_SW_H3_PHANG": {
    "desc": "Swash 1 H3 Generic Phase Angle Comp",
    "range": "-30 - 30",
    "default": "0",
    "unit": "deg"
  },
  "H_COL2YAW": {
    "desc": "Collective-Yaw Mixing",
    "range": "-2 - 2",
    "default": "0",
    "unit": ""
  },
  "H_DDFP_THST_EXPO": {
    "desc": "DDFP Tail Rotor Thrust Curve Expo",
    "range": "-1 - 1",
    "default": "0",
    "unit": ""
  },
  "H_DDFP_SPIN_MIN": {
    "desc": "DDFP Tail Rotor Motor Spin minimum",
    "range": "0.0 - 0.3",
    "default": "0",
    "unit": ""
  },
  "H_DDFP_SPIN_MAX": {
    "desc": "DDFP Tail Rotor Motor Spin maximum",
    "range": "0.9 - 1.0",
    "default": "0",
    "unit": ""
  },
  "H_DDFP_BAT_IDX": {
    "desc": "DDFP Tail Rotor Battery compensation index",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "H_DDFP_BAT_V_MAX": {
    "desc": "Battery voltage compensation maximum voltage",
    "range": "6 - 53",
    "default": "0",
    "unit": "V"
  },
  "H_DDFP_BAT_V_MIN": {
    "desc": "Battery voltage compensation minimum voltage",
    "range": "6 - 42",
    "default": "0",
    "unit": "V"
  },
  "H_YAW_TRIM": {
    "desc": "Tail Rotor Trim",
    "range": "-1 - 1",
    "default": "0",
    "unit": ""
  },
  "H_DUAL_MODE": {
    "desc": "Dual Mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_DCP_SCALER": {
    "desc": "Differential-Collective-Pitch Scaler",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "H_DCP_YAW": {
    "desc": "Differential-Collective-Pitch Yaw Mixing",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "H_YAW_SCALER": {
    "desc": "Scaler for yaw mixing",
    "range": "-10 - 10",
    "default": "0",
    "unit": ""
  },
  "H_COL2_MIN": {
    "desc": "Swash 2 Minimum Collective Pitch",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "H_COL2_MAX": {
    "desc": "Swash 2 Maximum Collective Pitch",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "H_SW2_TYPE": {
    "desc": "Swash 2 Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW2_COL_DIR": {
    "desc": "Swash 2 Collective Direction",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW2_LIN_SVO": {
    "desc": "Linearize Swash 2 Servos",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW2_H3_ENABLE": {
    "desc": "Swash 2 H3 Generic Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_SW2_H3_SV1_POS": {
    "desc": "Swash 2 H3 Generic Servo 1 Position",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "H_SW2_H3_SV2_POS": {
    "desc": "Swash 2 H3 Generic Servo 2 Position",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "H_SW2_H3_SV3_POS": {
    "desc": "Swash 2 H3 Generic Servo 3 Position",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "H_SW2_H3_PHANG": {
    "desc": "Swash 2 H3 Generic Phase Angle Comp",
    "range": "-30 - 30",
    "default": "0",
    "unit": "deg"
  },
  "H_DCP_TRIM": {
    "desc": "Differential Collective Pitch Trim",
    "range": "-0.2 - 0.2",
    "default": "0",
    "unit": ""
  },
  "H_YAW_REV_EXPO": {
    "desc": "Yaw reverser expo",
    "range": "-1 - 1000",
    "default": "0",
    "unit": ""
  },
  "H_COL_MIN": {
    "desc": "Minimum Collective Pitch",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "H_COL_MAX": {
    "desc": "Maximum Collective Pitch",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "H_SV_MAN": {
    "desc": "Manual Servo Mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_CYC_MAX": {
    "desc": "Maximum Cyclic Pitch Angle",
    "range": "0 - 4500",
    "default": "0",
    "unit": ""
  },
  "H_SV_TEST": {
    "desc": "Boot-up Servo Test Cycles",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "H_COL_HOVER": {
    "desc": "Collective Hover Value",
    "range": "0.3 - 0.8",
    "default": "0",
    "unit": ""
  },
  "H_HOVER_LEARN": {
    "desc": "Hover Value Learning",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_OPTIONS": {
    "desc": "Heli_Options [Bitmask: 0:Use Leaky I]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_COL_ANG_MIN": {
    "desc": "Collective Blade Pitch Angle Minimum",
    "range": "-20 - 0",
    "default": "0",
    "unit": "deg"
  },
  "H_COL_ANG_MAX": {
    "desc": "Collective Blade Pitch Angle Maximum",
    "range": "5 - 20",
    "default": "0",
    "unit": "deg"
  },
  "H_COL_ZERO_THRST": {
    "desc": "Collective Blade Pitch at Zero Thrust",
    "range": "-5 - 0",
    "default": "0",
    "unit": "deg"
  },
  "H_COL_LAND_MIN": {
    "desc": "Collective Blade Pitch Minimum when Landed",
    "range": "-5 - 0",
    "default": "0",
    "unit": "deg"
  },
  "H_RSC_SETPOINT": {
    "desc": "External Motor Governor Setpoint",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_MODE": {
    "desc": "Rotor Speed Control Mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_RSC_RAMP_TIME": {
    "desc": "Throttle Ramp Time",
    "range": "0 - 60",
    "default": "0",
    "unit": "s"
  },
  "H_RSC_RUNUP_TIME": {
    "desc": "Rotor Runup Time",
    "range": "0 - 60",
    "default": "0",
    "unit": "s"
  },
  "H_RSC_CRITICAL": {
    "desc": "Critical Rotor Speed",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_IDLE": {
    "desc": "Throttle Output at Idle",
    "range": "0 - 50",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_SLEWRATE": {
    "desc": "Throttle Slew Rate",
    "range": "0 - 500",
    "default": "0",
    "unit": ""
  },
  "H_RSC_THRCRV_0": {
    "desc": "Throttle Curve at 0% Coll",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_THRCRV_25": {
    "desc": "Throttle Curve at 25% Coll",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_THRCRV_50": {
    "desc": "Throttle Curve at 50% Coll",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_THRCRV_75": {
    "desc": "Throttle Curve at 75% Coll",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_THRCRV_100": {
    "desc": "Throttle Curve at 100% Coll",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_GOV_RANGE": {
    "desc": "Governor Operational Range",
    "range": "50 - 200",
    "default": "0",
    "unit": "RPM"
  },
  "H_RSC_CLDWN_TIME": {
    "desc": "Cooldown Time",
    "range": "0 - 120",
    "default": "0",
    "unit": "s"
  },
  "H_RSC_GOV_COMP": {
    "desc": "Governor Torque Compensator",
    "range": "0 - 70",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_GOV_DROOP": {
    "desc": "Governor Droop Compensator",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_GOV_FF": {
    "desc": "Governor Feedforward",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_GOV_RPM": {
    "desc": "Rotor RPM Setting",
    "range": "800 - 3500",
    "default": "0",
    "unit": "RPM"
  },
  "H_RSC_GOV_TORQUE": {
    "desc": "Governor Torque Limiter",
    "range": "10 - 60",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_AROT_ENBL": {
    "desc": "Enable autorotation handling in RSC",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "H_RSC_AROT_RAMP": {
    "desc": "Time for in-flight power re-engagement when exiting autorotations",
    "range": "0.1 - 10",
    "default": "0",
    "unit": "s"
  },
  "H_RSC_AROT_IDLE": {
    "desc": "Idle throttle percentage during autorotation",
    "range": "0 - 40",
    "default": "0",
    "unit": "%"
  },
  "H_RSC_AROT_RUNUP": {
    "desc": "Time allowed for in-flight power re-engagement",
    "range": "1 - 10",
    "default": "0",
    "unit": "s"
  },
  "IM_ACRO_COL_EXP": {
    "desc": "Acro Mode Collective Expo",
    "range": "-0.5 - 0.95",
    "default": "0",
    "unit": ""
  },
  "IM_STB_COL_1": {
    "desc": "Stabilize Collective Low",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "IM_STB_COL_2": {
    "desc": "Stabilize Collective Mid-Low",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "IM_STB_COL_3": {
    "desc": "Stabilize Collective Mid-High",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "IM_STB_COL_4": {
    "desc": "Stabilize Collective High",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "INS_GYROFFS_X": {
    "desc": "Gyro offsets of X axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYROFFS_Y": {
    "desc": "Gyro offsets of Y axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYROFFS_Z": {
    "desc": "Gyro offsets of Z axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYR2OFFS_X": {
    "desc": "Gyro2 offsets of X axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYR2OFFS_Y": {
    "desc": "Gyro2 offsets of Y axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYR2OFFS_Z": {
    "desc": "Gyro2 offsets of Z axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYR3OFFS_X": {
    "desc": "Gyro3 offsets of X axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYR3OFFS_Y": {
    "desc": "Gyro3 offsets of Y axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_GYR3OFFS_Z": {
    "desc": "Gyro3 offsets of Z axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS_ACCSCAL_X": {
    "desc": "Accelerometer scaling of X axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACCSCAL_Y": {
    "desc": "Accelerometer scaling of Y axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACCSCAL_Z": {
    "desc": "Accelerometer scaling of Z axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACCOFFS_X": {
    "desc": "Accelerometer offsets of X axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACCOFFS_Y": {
    "desc": "Accelerometer offsets of Y axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACCOFFS_Z": {
    "desc": "Accelerometer offsets of Z axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACC2SCAL_X": {
    "desc": "Accelerometer2 scaling of X axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACC2SCAL_Y": {
    "desc": "Accelerometer2 scaling of Y axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACC2SCAL_Z": {
    "desc": "Accelerometer2 scaling of Z axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACC2OFFS_X": {
    "desc": "Accelerometer2 offsets of X axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACC2OFFS_Y": {
    "desc": "Accelerometer2 offsets of Y axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACC2OFFS_Z": {
    "desc": "Accelerometer2 offsets of Z axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACC3SCAL_X": {
    "desc": "Accelerometer3 scaling of X axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACC3SCAL_Y": {
    "desc": "Accelerometer3 scaling of Y axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACC3SCAL_Z": {
    "desc": "Accelerometer3 scaling of Z axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS_ACC3OFFS_X": {
    "desc": "Accelerometer3 offsets of X axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACC3OFFS_Y": {
    "desc": "Accelerometer3 offsets of Y axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_ACC3OFFS_Z": {
    "desc": "Accelerometer3 offsets of Z axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS_GYRO_FILTER": {
    "desc": "Gyro filter cutoff frequency",
    "range": "0 - 256",
    "default": "0",
    "unit": "Hz"
  },
  "INS_ACCEL_FILTER": {
    "desc": "Accel filter cutoff frequency",
    "range": "0 - 256",
    "default": "0",
    "unit": "Hz"
  },
  "INS_USE": {
    "desc": "Use first IMU for attitude, velocity and position estimates",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_USE2": {
    "desc": "Use second IMU for attitude, velocity and position estimates",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_USE3": {
    "desc": "Use third IMU for attitude, velocity and position estimates",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_STILL_THRESH": {
    "desc": "Stillness threshold for detecting if we are moving",
    "range": "0.05 - 50",
    "default": "0",
    "unit": ""
  },
  "INS_GYR_CAL": {
    "desc": "Gyro Calibration scheme",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TRIM_OPTION": {
    "desc": "Accel cal trim option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_ACC_BODYFIX": {
    "desc": "Body-fixed accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_POS1_X": {
    "desc": "IMU accelerometer X position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_POS1_Y": {
    "desc": "IMU accelerometer Y position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_POS1_Z": {
    "desc": "IMU accelerometer Z position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_POS2_X": {
    "desc": "IMU accelerometer X position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_POS2_Y": {
    "desc": "IMU accelerometer Y position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_POS2_Z": {
    "desc": "IMU accelerometer Z position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_POS3_X": {
    "desc": "IMU accelerometer X position",
    "range": "-10 - 10",
    "default": "0",
    "unit": "m"
  },
  "INS_POS3_Y": {
    "desc": "IMU accelerometer Y position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_POS3_Z": {
    "desc": "IMU accelerometer Z position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS_GYR_ID": {
    "desc": "Gyro ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_GYR2_ID": {
    "desc": "Gyro2 ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_GYR3_ID": {
    "desc": "Gyro3 ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_ACC_ID": {
    "desc": "Accelerometer ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_ACC2_ID": {
    "desc": "Accelerometer2 ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_ACC3_ID": {
    "desc": "Accelerometer3 ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_FAST_SAMPLE": {
    "desc": "Fast sampling mask [Bitmask: 0:FirstIMU,1:SecondIMU,2:ThirdIMU]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_ENABLE_MASK": {
    "desc": "IMU enable mask [Bitmask: 0:FirstIMU,1:SecondIMU,2:ThirdIMU,3:FourthIMU,4:FifthIMU,5:SixthIMU,6:SeventhIMU]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_GYRO_RATE": {
    "desc": "Gyro rate for IMUs with Fast Sampling enabled",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_ACC1_CALTEMP": {
    "desc": "Calibration temperature for 1st accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS_GYR1_CALTEMP": {
    "desc": "Calibration temperature for 1st gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS_ACC2_CALTEMP": {
    "desc": "Calibration temperature for 2nd accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS_GYR2_CALTEMP": {
    "desc": "Calibration temperature for 2nd gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS_ACC3_CALTEMP": {
    "desc": "Calibration temperature for 3rd accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS_GYR3_CALTEMP": {
    "desc": "Calibration temperature for 3rd gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS_TCAL_OPTIONS": {
    "desc": "Options for temperature calibration [Bitmask: 0:PersistTemps, 1:PersistAccels]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_RAW_LOG_OPT": {
    "desc": "Raw logging options [Bitmask: 0:Log primary gyro only, 1:Log all gyros, 2:Post filter, 3: Pre and post filter]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_USE": {
    "desc": "Use first IMU for attitude, velocity and position estimates",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_ACC_ID": {
    "desc": "Accelerometer ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_ACCSCAL_X": {
    "desc": "Accelerometer scaling of X axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS4_ACCSCAL_Y": {
    "desc": "Accelerometer scaling of Y axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS4_ACCSCAL_Z": {
    "desc": "Accelerometer scaling of Z axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS4_ACCOFFS_X": {
    "desc": "Accelerometer offsets of X axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS4_ACCOFFS_Y": {
    "desc": "Accelerometer offsets of Y axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS4_ACCOFFS_Z": {
    "desc": "Accelerometer offsets of Z axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS4_POS_X": {
    "desc": "IMU accelerometer X position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS4_POS_Y": {
    "desc": "IMU accelerometer Y position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS4_POS_Z": {
    "desc": "IMU accelerometer Z position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS4_ACC_CALTEMP": {
    "desc": "Calibration temperature for accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS4_GYR_ID": {
    "desc": "Gyro ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_GYROFFS_X": {
    "desc": "Gyro offsets of X axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS4_GYROFFS_Y": {
    "desc": "Gyro offsets of Y axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS4_GYROFFS_Z": {
    "desc": "Gyro offsets of Z axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS4_GYR_CALTEMP": {
    "desc": "Calibration temperature for gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS4_TCAL_ENABLE": {
    "desc": "Enable temperature calibration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_TMIN": {
    "desc": "Temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS4_TCAL_TMAX": {
    "desc": "Temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS4_TCAL_ACC1_X": {
    "desc": "Accelerometer 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC1_Y": {
    "desc": "Accelerometer 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC1_Z": {
    "desc": "Accelerometer 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC2_X": {
    "desc": "Accelerometer 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC2_Y": {
    "desc": "Accelerometer 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC2_Z": {
    "desc": "Accelerometer 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC3_X": {
    "desc": "Accelerometer 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC3_Y": {
    "desc": "Accelerometer 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_ACC3_Z": {
    "desc": "Accelerometer 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR1_X": {
    "desc": "Gyroscope 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR1_Y": {
    "desc": "Gyroscope 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR1_Z": {
    "desc": "Gyroscope 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR2_X": {
    "desc": "Gyroscope 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR2_Y": {
    "desc": "Gyroscope 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR2_Z": {
    "desc": "Gyroscope 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR3_X": {
    "desc": "Gyroscope 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR3_Y": {
    "desc": "Gyroscope 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS4_TCAL_GYR3_Z": {
    "desc": "Gyroscope 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_USE": {
    "desc": "Use first IMU for attitude, velocity and position estimates",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_ACC_ID": {
    "desc": "Accelerometer ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_ACCSCAL_X": {
    "desc": "Accelerometer scaling of X axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS5_ACCSCAL_Y": {
    "desc": "Accelerometer scaling of Y axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS5_ACCSCAL_Z": {
    "desc": "Accelerometer scaling of Z axis",
    "range": "0.8 - 1.2",
    "default": "0",
    "unit": ""
  },
  "INS5_ACCOFFS_X": {
    "desc": "Accelerometer offsets of X axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS5_ACCOFFS_Y": {
    "desc": "Accelerometer offsets of Y axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS5_ACCOFFS_Z": {
    "desc": "Accelerometer offsets of Z axis",
    "range": "-3.5 - 3.5",
    "default": "0",
    "unit": "m/s/s"
  },
  "INS5_POS_X": {
    "desc": "IMU accelerometer X position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS5_POS_Y": {
    "desc": "IMU accelerometer Y position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS5_POS_Z": {
    "desc": "IMU accelerometer Z position",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "INS5_ACC_CALTEMP": {
    "desc": "Calibration temperature for accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS5_GYR_ID": {
    "desc": "Gyro ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_GYROFFS_X": {
    "desc": "Gyro offsets of X axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS5_GYROFFS_Y": {
    "desc": "Gyro offsets of Y axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS5_GYROFFS_Z": {
    "desc": "Gyro offsets of Z axis",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "INS5_GYR_CALTEMP": {
    "desc": "Calibration temperature for gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "INS5_TCAL_ENABLE": {
    "desc": "Enable temperature calibration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_TMIN": {
    "desc": "Temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS5_TCAL_TMAX": {
    "desc": "Temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS5_TCAL_ACC1_X": {
    "desc": "Accelerometer 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC1_Y": {
    "desc": "Accelerometer 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC1_Z": {
    "desc": "Accelerometer 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC2_X": {
    "desc": "Accelerometer 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC2_Y": {
    "desc": "Accelerometer 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC2_Z": {
    "desc": "Accelerometer 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC3_X": {
    "desc": "Accelerometer 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC3_Y": {
    "desc": "Accelerometer 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_ACC3_Z": {
    "desc": "Accelerometer 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR1_X": {
    "desc": "Gyroscope 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR1_Y": {
    "desc": "Gyroscope 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR1_Z": {
    "desc": "Gyroscope 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR2_X": {
    "desc": "Gyroscope 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR2_Y": {
    "desc": "Gyroscope 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR2_Z": {
    "desc": "Gyroscope 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR3_X": {
    "desc": "Gyroscope 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR3_Y": {
    "desc": "Gyroscope 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS5_TCAL_GYR3_Z": {
    "desc": "Gyroscope 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC2_ENABLE": {
    "desc": "Harmonic Notch Filter enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC2_FREQ": {
    "desc": "Harmonic Notch Filter base frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTC2_BW": {
    "desc": "Harmonic Notch Filter bandwidth",
    "range": "5 - 250",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTC2_ATT": {
    "desc": "Harmonic Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "INS_HNTC2_HMNCS": {
    "desc": "Harmonic Notch Filter harmonics [Bitmask: 0:  1st harmonic, 1:  2nd harmonic, 2:  3rd harmonic, 3:  4th harmonic, 4:  5th harmonic, 5:  6th harmonic, 6:  7th harmonic, 7:  8th harmonic, 8:  9th harmonic, 9:  10th harmonic, 10: 11th harmonic, 11: 12th harmonic, 12: 13th harmonic, 13: 14th harmonic, 14: 15th harmonic, 15: 16th harmonic]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC2_REF": {
    "desc": "Harmonic Notch Filter reference value",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC2_MODE": {
    "desc": "Harmonic Notch Filter dynamic frequency tracking mode",
    "range": "0 - 5",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC2_OPTS": {
    "desc": "Harmonic Notch Filter options [Bitmask: 0:Double notch,1:Multi-Source,2:Update at loop rate,3:EnableOnAllIMUs,4:Triple notch, 5:Use min freq on RPM source failure, 6:Quintuple notch]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC2_FM_RAT": {
    "desc": "Throttle notch min frequency ratio",
    "range": "0.1 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC3_ENABLE": {
    "desc": "Harmonic Notch Filter enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC3_FREQ": {
    "desc": "Harmonic Notch Filter base frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTC3_BW": {
    "desc": "Harmonic Notch Filter bandwidth",
    "range": "5 - 250",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTC3_ATT": {
    "desc": "Harmonic Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "INS_HNTC3_HMNCS": {
    "desc": "Harmonic Notch Filter harmonics [Bitmask: 0:  1st harmonic, 1:  2nd harmonic, 2:  3rd harmonic, 3:  4th harmonic, 4:  5th harmonic, 5:  6th harmonic, 6:  7th harmonic, 7:  8th harmonic, 8:  9th harmonic, 9:  10th harmonic, 10: 11th harmonic, 11: 12th harmonic, 12: 13th harmonic, 13: 14th harmonic, 14: 15th harmonic, 15: 16th harmonic]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC3_REF": {
    "desc": "Harmonic Notch Filter reference value",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC3_MODE": {
    "desc": "Harmonic Notch Filter dynamic frequency tracking mode",
    "range": "0 - 5",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC3_OPTS": {
    "desc": "Harmonic Notch Filter options [Bitmask: 0:Double notch,1:Multi-Source,2:Update at loop rate,3:EnableOnAllIMUs,4:Triple notch, 5:Use min freq on RPM source failure, 6:Quintuple notch]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC3_FM_RAT": {
    "desc": "Throttle notch min frequency ratio",
    "range": "0.1 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC4_ENABLE": {
    "desc": "Harmonic Notch Filter enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC4_FREQ": {
    "desc": "Harmonic Notch Filter base frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTC4_BW": {
    "desc": "Harmonic Notch Filter bandwidth",
    "range": "5 - 250",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTC4_ATT": {
    "desc": "Harmonic Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "INS_HNTC4_HMNCS": {
    "desc": "Harmonic Notch Filter harmonics [Bitmask: 0:  1st harmonic, 1:  2nd harmonic, 2:  3rd harmonic, 3:  4th harmonic, 4:  5th harmonic, 5:  6th harmonic, 6:  7th harmonic, 7:  8th harmonic, 8:  9th harmonic, 9:  10th harmonic, 10: 11th harmonic, 11: 12th harmonic, 12: 13th harmonic, 13: 14th harmonic, 14: 15th harmonic, 15: 16th harmonic]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC4_REF": {
    "desc": "Harmonic Notch Filter reference value",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC4_MODE": {
    "desc": "Harmonic Notch Filter dynamic frequency tracking mode",
    "range": "0 - 5",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC4_OPTS": {
    "desc": "Harmonic Notch Filter options [Bitmask: 0:Double notch,1:Multi-Source,2:Update at loop rate,3:EnableOnAllIMUs,4:Triple notch, 5:Use min freq on RPM source failure, 6:Quintuple notch]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTC4_FM_RAT": {
    "desc": "Throttle notch min frequency ratio",
    "range": "0.1 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_HNTCH_ENABLE": {
    "desc": "Harmonic Notch Filter enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTCH_FREQ": {
    "desc": "Harmonic Notch Filter base frequency",
    "range": "10 - 495",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTCH_BW": {
    "desc": "Harmonic Notch Filter bandwidth",
    "range": "5 - 250",
    "default": "0",
    "unit": "Hz"
  },
  "INS_HNTCH_ATT": {
    "desc": "Harmonic Notch Filter attenuation",
    "range": "5 - 50",
    "default": "0",
    "unit": "dB"
  },
  "INS_HNTCH_HMNCS": {
    "desc": "Harmonic Notch Filter harmonics [Bitmask: 0:  1st harmonic, 1:  2nd harmonic, 2:  3rd harmonic, 3:  4th harmonic, 4:  5th harmonic, 5:  6th harmonic, 6:  7th harmonic, 7:  8th harmonic, 8:  9th harmonic, 9:  10th harmonic, 10: 11th harmonic, 11: 12th harmonic, 12: 13th harmonic, 13: 14th harmonic, 14: 15th harmonic, 15: 16th harmonic]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTCH_REF": {
    "desc": "Harmonic Notch Filter reference value",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_HNTCH_MODE": {
    "desc": "Harmonic Notch Filter dynamic frequency tracking mode",
    "range": "0 - 5",
    "default": "0",
    "unit": ""
  },
  "INS_HNTCH_OPTS": {
    "desc": "Harmonic Notch Filter options [Bitmask: 0:Double notch,1:Multi-Source,2:Update at loop rate,3:EnableOnAllIMUs,4:Triple notch, 5:Use min freq on RPM source failure, 6:Quintuple notch]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_HNTCH_FM_RAT": {
    "desc": "Throttle notch min frequency ratio",
    "range": "0.1 - 1.0",
    "default": "0",
    "unit": ""
  },
  "INS_LOG_BAT_CNT": {
    "desc": "sample count per batch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_LOG_BAT_MASK": {
    "desc": "Sensor Bitmask [Bitmask: 0:IMU1,1:IMU2,2:IMU3]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_LOG_BAT_OPT": {
    "desc": "Batch Logging Options Mask [Bitmask: 0:Sensor-Rate Logging (sample at full sensor rate seen by AP), 1: Sample post-filtering, 2: Sample pre- and post-filter]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_LOG_BAT_LGIN": {
    "desc": "logging interval",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "INS_LOG_BAT_LGCT": {
    "desc": "logging count",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ENABLE": {
    "desc": "Enable temperature calibration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_TMIN": {
    "desc": "Temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS_TCAL1_TMAX": {
    "desc": "Temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS_TCAL1_ACC1_X": {
    "desc": "Accelerometer 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC1_Y": {
    "desc": "Accelerometer 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC1_Z": {
    "desc": "Accelerometer 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC2_X": {
    "desc": "Accelerometer 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC2_Y": {
    "desc": "Accelerometer 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC2_Z": {
    "desc": "Accelerometer 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC3_X": {
    "desc": "Accelerometer 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC3_Y": {
    "desc": "Accelerometer 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_ACC3_Z": {
    "desc": "Accelerometer 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR1_X": {
    "desc": "Gyroscope 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR1_Y": {
    "desc": "Gyroscope 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR1_Z": {
    "desc": "Gyroscope 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR2_X": {
    "desc": "Gyroscope 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR2_Y": {
    "desc": "Gyroscope 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR2_Z": {
    "desc": "Gyroscope 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR3_X": {
    "desc": "Gyroscope 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR3_Y": {
    "desc": "Gyroscope 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL1_GYR3_Z": {
    "desc": "Gyroscope 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ENABLE": {
    "desc": "Enable temperature calibration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_TMIN": {
    "desc": "Temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS_TCAL2_TMAX": {
    "desc": "Temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS_TCAL2_ACC1_X": {
    "desc": "Accelerometer 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC1_Y": {
    "desc": "Accelerometer 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC1_Z": {
    "desc": "Accelerometer 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC2_X": {
    "desc": "Accelerometer 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC2_Y": {
    "desc": "Accelerometer 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC2_Z": {
    "desc": "Accelerometer 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC3_X": {
    "desc": "Accelerometer 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC3_Y": {
    "desc": "Accelerometer 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_ACC3_Z": {
    "desc": "Accelerometer 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR1_X": {
    "desc": "Gyroscope 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR1_Y": {
    "desc": "Gyroscope 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR1_Z": {
    "desc": "Gyroscope 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR2_X": {
    "desc": "Gyroscope 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR2_Y": {
    "desc": "Gyroscope 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR2_Z": {
    "desc": "Gyroscope 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR3_X": {
    "desc": "Gyroscope 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR3_Y": {
    "desc": "Gyroscope 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL2_GYR3_Z": {
    "desc": "Gyroscope 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ENABLE": {
    "desc": "Enable temperature calibration",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_TMIN": {
    "desc": "Temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS_TCAL3_TMAX": {
    "desc": "Temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "INS_TCAL3_ACC1_X": {
    "desc": "Accelerometer 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC1_Y": {
    "desc": "Accelerometer 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC1_Z": {
    "desc": "Accelerometer 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC2_X": {
    "desc": "Accelerometer 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC2_Y": {
    "desc": "Accelerometer 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC2_Z": {
    "desc": "Accelerometer 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC3_X": {
    "desc": "Accelerometer 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC3_Y": {
    "desc": "Accelerometer 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_ACC3_Z": {
    "desc": "Accelerometer 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR1_X": {
    "desc": "Gyroscope 1st order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR1_Y": {
    "desc": "Gyroscope 1st order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR1_Z": {
    "desc": "Gyroscope 1st order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR2_X": {
    "desc": "Gyroscope 2nd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR2_Y": {
    "desc": "Gyroscope 2nd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR2_Z": {
    "desc": "Gyroscope 2nd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR3_X": {
    "desc": "Gyroscope 3rd order temperature coefficient X axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR3_Y": {
    "desc": "Gyroscope 3rd order temperature coefficient Y axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "INS_TCAL3_GYR3_Z": {
    "desc": "Gyroscope 3rd order temperature coefficient Z axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "KDE_NPOLE": {
    "desc": "Number of motor poles",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LGR_ENABLE": {
    "desc": "Enable landing gear",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LGR_STARTUP": {
    "desc": "Landing Gear Startup position",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LGR_DEPLOY_PIN": {
    "desc": "Chassis deployment feedback pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "LGR_DEPLOY_POL": {
    "desc": "Chassis deployment feedback pin polarity",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LGR_WOW_PIN": {
    "desc": "Weight on wheels feedback pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "LGR_WOW_POL": {
    "desc": "Weight on wheels feedback pin polarity",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LGR_DEPLOY_ALT": {
    "desc": "Landing gear deployment altitude",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "LGR_RETRACT_ALT": {
    "desc": "Landing gear retract altitude",
    "range": "0 - 1000",
    "default": "0",
    "unit": "m"
  },
  "LGR_OPTIONS": {
    "desc": "Landing gear auto retract/deploy options [Bitmask: 0:Retract after Takeoff,1:Deploy during Land]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LOG_BACKEND_TYPE": {
    "desc": "AP_Logger Backend Storage type [Bitmask: 0:File,1:MAVLink,2:Block]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LOG_FILE_BUFSIZE": {
    "desc": "Logging File and Block Backend buffer size max (in kibibytes)",
    "range": "4 - 200",
    "default": "0",
    "unit": "KiB"
  },
  "LOG_DISARMED": {
    "desc": "Enable logging while disarmed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LOG_REPLAY": {
    "desc": "Enable logging of information needed for Replay",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LOG_FILE_DSRMROT": {
    "desc": "Stop logging to current file on disarm",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "LOG_MAV_BUFSIZE": {
    "desc": "Maximum AP_Logger MAVLink Backend buffer size",
    "range": "N/A",
    "default": "0",
    "unit": "kB"
  },
  "LOG_FILE_TIMEOUT": {
    "desc": "Timeout before giving up on file writes",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "LOG_FILE_MB_FREE": {
    "desc": "Old logs on the SD card will be deleted to maintain this amount of free space",
    "range": "2 - 1000",
    "default": "0",
    "unit": "MB"
  },
  "LOG_FILE_RATEMAX": {
    "desc": "Maximum logging rate for file backend",
    "range": "0 - 1000",
    "default": "0",
    "unit": "Hz"
  },
  "LOG_MAV_RATEMAX": {
    "desc": "Maximum logging rate for mavlink backend",
    "range": "0 - 1000",
    "default": "0",
    "unit": "Hz"
  },
  "LOG_BLK_RATEMAX": {
    "desc": "Maximum logging rate for block backend",
    "range": "0 - 1000",
    "default": "0",
    "unit": "Hz"
  },
  "LOG_DARM_RATEMAX": {
    "desc": "Maximum logging rate when disarmed",
    "range": "0 - 1000",
    "default": "0",
    "unit": "Hz"
  },
  "LOG_MAX_FILES": {
    "desc": "Maximum number of log files",
    "range": "2 - 500",
    "default": "0",
    "unit": ""
  },
  "LOIT_ANG_MAX": {
    "desc": "Loiter pilot angle max",
    "range": "0 - 45",
    "default": "0",
    "unit": "deg"
  },
  "LOIT_SPEED": {
    "desc": "Loiter Horizontal Maximum Speed",
    "range": "20 - 3500",
    "default": "0",
    "unit": "cm/s"
  },
  "LOIT_ACC_MAX": {
    "desc": "Loiter maximum correction acceleration",
    "range": "100 - 981",
    "default": "0",
    "unit": "cm/s/s"
  },
  "LOIT_BRK_ACCEL": {
    "desc": "Loiter braking acceleration",
    "range": "25 - 250",
    "default": "0",
    "unit": "cm/s/s"
  },
  "LOIT_BRK_JERK": {
    "desc": "Loiter braking jerk",
    "range": "500 - 5000",
    "default": "0",
    "unit": "cm/s/s/s"
  },
  "LOIT_BRK_DELAY": {
    "desc": "Loiter brake start delay (in seconds)",
    "range": "0 - 2",
    "default": "0",
    "unit": "s"
  },
  "LOIT_OPTIONS": {
    "desc": "Loiter mode options [Bitmask: 0: Enable Coordinated turns]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV_SYSID": {
    "desc": "MAVLink system ID of this vehicle",
    "range": "1 - 255",
    "default": "0",
    "unit": ""
  },
  "MAV_GCS_SYSID": {
    "desc": "My ground station number",
    "range": "1 - 255",
    "default": "0",
    "unit": ""
  },
  "MAV_GCS_SYSID_HI": {
    "desc": "ground station system ID, maximum",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "MAV_OPTIONS": {
    "desc": "MAVLink Options [Bitmask: 0:Accept MAVLink only from system IDs given by MAV_SYSID_GCS and MAV_SYSID_GCS_HI]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV_TELEM_DELAY": {
    "desc": "Telemetry startup delay",
    "range": "0 - 30",
    "default": "0",
    "unit": "s"
  },
  "MAV1_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV1_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV1_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV2_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV2_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV2_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV3_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV3_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV3_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV4_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV4_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV4_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV5_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV5_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV5_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV6_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV6_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV6_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV7_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV7_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV7_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV8_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV8_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV8_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV9_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV9_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV9_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV10_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV10_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV10_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV11_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV11_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV11_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV12_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV12_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV12_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV13_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV13_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV13_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV14_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV14_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV14_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV15_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV15_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV15_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV16_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV16_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV16_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV17_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV17_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV17_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV18_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV18_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV18_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV19_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV19_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV19_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV20_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV20_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV20_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV21_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV21_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV21_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV22_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV22_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV22_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV23_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV23_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV23_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV24_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV24_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV24_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV25_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV25_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV25_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV26_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV26_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV26_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV27_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV27_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV27_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV28_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV28_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV28_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV29_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV29_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV29_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV30_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV30_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV30_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV31_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV31_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV31_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MAV32_RAW_SENS": {
    "desc": "Raw sensor stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_EXT_STAT": {
    "desc": "Extended status stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_RC_CHAN": {
    "desc": "RC Channel stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_RAW_CTRL": {
    "desc": "Raw Control stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_POSITION": {
    "desc": "Position stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_EXTRA1": {
    "desc": "Extra data type 1 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_EXTRA2": {
    "desc": "Extra data type 2 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": ""
  },
  "MAV32_EXTRA3": {
    "desc": "Extra data type 3 stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_PARAMS": {
    "desc": "Parameter stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_ADSB": {
    "desc": "ADSB stream rate",
    "range": "0 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "MAV32_OPTIONS": {
    "desc": "Bitmask for configuring this telemetry channel [Bitmask: 0:Accept unsigned MAVLink2 messages, 1:Don't forward mavlink to/from, 2:Ignore Streamrate, 3:forward mavlink packets that don't pass CRC]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MIS_TOTAL": {
    "desc": "Total mission commands",
    "range": "0 - 32766",
    "default": "0",
    "unit": ""
  },
  "MIS_RESTART": {
    "desc": "Mission Restart when entering Auto mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MIS_OPTIONS": {
    "desc": "Mission options bitmask [Bitmask: 0:Clear Mission on reboot, 2:ContinueAfterLand]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT1_TYPE": {
    "desc": "Mount Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT1_DEFLT_MODE": {
    "desc": "Mount default operating mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT1_RC_RATE": {
    "desc": "Mount RC Rate",
    "range": "0 - 90",
    "default": "0",
    "unit": "deg/s"
  },
  "MNT1_ROLL_MIN": {
    "desc": "Mount Roll angle minimum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_ROLL_MAX": {
    "desc": "Mount Roll angle maximum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_PITCH_MIN": {
    "desc": "Mount Pitch angle minimum",
    "range": "-90 - 90",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_PITCH_MAX": {
    "desc": "Mount Pitch angle maximum",
    "range": "-90 - 90",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_YAW_MIN": {
    "desc": "Mount Yaw angle minimum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_YAW_MAX": {
    "desc": "Mount Yaw angle maximum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_RETRACT_X": {
    "desc": "Mount roll angle when in retracted position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_RETRACT_Y": {
    "desc": "Mount pitch angle when in retracted position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_RETRACT_Z": {
    "desc": "Mount yaw angle when in retracted position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_NEUTRAL_X": {
    "desc": "Mount roll angle when in neutral position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_NEUTRAL_Y": {
    "desc": "Mount pitch angle when in neutral position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_NEUTRAL_Z": {
    "desc": "Mount yaw angle when in neutral position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT1_LEAD_RLL": {
    "desc": "Mount Roll stabilization lead time",
    "range": "0.0 - 0.2",
    "default": "0",
    "unit": "s"
  },
  "MNT1_LEAD_PTCH": {
    "desc": "Mount Pitch stabilization lead time",
    "range": "0.0 - 0.2",
    "default": "0",
    "unit": "s"
  },
  "MNT1_SYSID_DFLT": {
    "desc": "Mount Target sysID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT1_DEVID": {
    "desc": "Mount Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT1_OPTIONS": {
    "desc": "Mount options [Bitmask: 0:RC lock state from previous mode, 1:Return to neutral angles on RC failsafe, 2:Force FPV (bf) lock on roll and pitch]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT2_TYPE": {
    "desc": "Mount Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT2_DEFLT_MODE": {
    "desc": "Mount default operating mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT2_RC_RATE": {
    "desc": "Mount RC Rate",
    "range": "0 - 90",
    "default": "0",
    "unit": "deg/s"
  },
  "MNT2_ROLL_MIN": {
    "desc": "Mount Roll angle minimum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_ROLL_MAX": {
    "desc": "Mount Roll angle maximum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_PITCH_MIN": {
    "desc": "Mount Pitch angle minimum",
    "range": "-90 - 90",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_PITCH_MAX": {
    "desc": "Mount Pitch angle maximum",
    "range": "-90 - 90",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_YAW_MIN": {
    "desc": "Mount Yaw angle minimum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_YAW_MAX": {
    "desc": "Mount Yaw angle maximum",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_RETRACT_X": {
    "desc": "Mount roll angle when in retracted position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_RETRACT_Y": {
    "desc": "Mount pitch angle when in retracted position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_RETRACT_Z": {
    "desc": "Mount yaw angle when in retracted position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_NEUTRAL_X": {
    "desc": "Mount roll angle when in neutral position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_NEUTRAL_Y": {
    "desc": "Mount pitch angle when in neutral position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_NEUTRAL_Z": {
    "desc": "Mount yaw angle when in neutral position",
    "range": "-180.0 - 180.0",
    "default": "0",
    "unit": "deg"
  },
  "MNT2_LEAD_RLL": {
    "desc": "Mount Roll stabilization lead time",
    "range": "0.0 - 0.2",
    "default": "0",
    "unit": "s"
  },
  "MNT2_LEAD_PTCH": {
    "desc": "Mount Pitch stabilization lead time",
    "range": "0.0 - 0.2",
    "default": "0",
    "unit": "s"
  },
  "MNT2_SYSID_DFLT": {
    "desc": "Mount Target sysID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT2_DEVID": {
    "desc": "Mount Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MNT2_OPTIONS": {
    "desc": "Mount options [Bitmask: 0:RC lock state from previous mode, 1:Return to neutral angles on RC failsafe, 2:Force FPV (bf) lock on roll and pitch]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MOT_YAW_HEADROOM": {
    "desc": "Matrix Yaw Min",
    "range": "0 - 500",
    "default": "0",
    "unit": "PWM"
  },
  "MOT_THST_EXPO": {
    "desc": "Thrust Curve Expo",
    "range": "-1.0 - 1.0",
    "default": "0",
    "unit": ""
  },
  "MOT_SPIN_MAX": {
    "desc": "Motor Spin maximum",
    "range": "0.9 - 1.0",
    "default": "0",
    "unit": ""
  },
  "MOT_BAT_VOLT_MAX": {
    "desc": "Battery voltage compensation maximum voltage",
    "range": "6 - 53",
    "default": "0",
    "unit": "V"
  },
  "MOT_BAT_VOLT_MIN": {
    "desc": "Battery voltage compensation minimum voltage",
    "range": "6 - 42",
    "default": "0",
    "unit": "V"
  },
  "MOT_BAT_CURR_MAX": {
    "desc": "Motor Current Max",
    "range": "0 - 200",
    "default": "0",
    "unit": "A"
  },
  "MOT_PWM_TYPE": {
    "desc": "Output PWM type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MOT_PWM_MIN": {
    "desc": "PWM output minimum",
    "range": "0 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "MOT_PWM_MAX": {
    "desc": "PWM output maximum",
    "range": "0 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "MOT_SPIN_MIN": {
    "desc": "Motor Spin minimum",
    "range": "0.0 - 0.25",
    "default": "0",
    "unit": ""
  },
  "MOT_SPIN_ARM": {
    "desc": "Motor Spin armed",
    "range": "0.0 - 0.2",
    "default": "0",
    "unit": ""
  },
  "MOT_BAT_CURR_TC": {
    "desc": "Motor Current Max Time Constant",
    "range": "0 - 10",
    "default": "0",
    "unit": "s"
  },
  "MOT_THST_HOVER": {
    "desc": "Thrust Hover Value",
    "range": "0.125 - 0.6875",
    "default": "0",
    "unit": ""
  },
  "MOT_HOVER_LEARN": {
    "desc": "Hover Value Learning",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MOT_SAFE_DISARM": {
    "desc": "Motor PWM output disabled when disarmed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MOT_YAW_SV_ANGLE": {
    "desc": "Yaw Servo Max Lean Angle",
    "range": "5 - 80",
    "default": "0",
    "unit": "deg"
  },
  "MOT_SPOOL_TIME": {
    "desc": "Spool up time",
    "range": "0.05 - 2",
    "default": "0",
    "unit": "s"
  },
  "MOT_BOOST_SCALE": {
    "desc": "Motor boost scale",
    "range": "0 - 5",
    "default": "0",
    "unit": ""
  },
  "MOT_BAT_IDX": {
    "desc": "Battery compensation index",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "MOT_SLEW_UP_TIME": {
    "desc": "Output slew time for increasing throttle",
    "range": "0 - 0.5",
    "default": "0",
    "unit": "s"
  },
  "MOT_SLEW_DN_TIME": {
    "desc": "Output slew time for decreasing throttle",
    "range": "0 - 0.5",
    "default": "0",
    "unit": "s"
  },
  "MOT_SAFE_TIME": {
    "desc": "PWM re-enable delay after arming when disarmed pwm was disabled",
    "range": "0 - 5",
    "default": "0",
    "unit": "s"
  },
  "MOT_OPTIONS": {
    "desc": "Motor options [Bitmask: 0:Voltage compensation uses raw voltage]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MOT_SPOOL_TIM_DN": {
    "desc": "Spool down time",
    "range": "0 - 2",
    "default": "0",
    "unit": "s"
  },
  "MSP_OSD_NCELLS": {
    "desc": "Cell count override",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "MSP_OPTIONS": {
    "desc": "MSP OSD Options [Bitmask: 0:EnableTelemetryMode, 1: unused, 2:EnableBTFLFonts, 3:EnableINAVFonts]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_ENABLE": {
    "desc": "Networking Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_NETMASK": {
    "desc": "IP Subnet mask",
    "range": "0 - 32",
    "default": "0",
    "unit": ""
  },
  "NET_DHCP": {
    "desc": "DHCP client",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_TESTS": {
    "desc": "Test enable flags [Bitmask: 0:UDP echo test,1:TCP echo test, 2:TCP discard test, 3:TCP reflect test]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_OPTIONS": {
    "desc": "Networking options [Bitmask: 0:EnablePPP Ethernet gateway, 1:Enable CAN1 multicast endpoint, 2:Enable CAN2 multicast endpoint, 3:Enable CAN1 multicast bridged, 4:Enable CAN2 multicast bridged, 5:DisablePPPTimeout, 6:DisablePPPEchoLimit, 7:Capture to file]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_GWADDR0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_GWADDR1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_GWADDR2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_GWADDR3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_IPADDR0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_IPADDR1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_IPADDR2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_IPADDR3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_MACADDR0": {
    "desc": "MAC Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_MACADDR1": {
    "desc": "MAC Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_MACADDR2": {
    "desc": "MAC Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_MACADDR3": {
    "desc": "MAC Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_MACADDR4": {
    "desc": "MAC Address 5th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_MACADDR5": {
    "desc": "MAC Address 6th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P1_TYPE": {
    "desc": "Port type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P1_PROTOCOL": {
    "desc": "Protocol",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P1_PORT": {
    "desc": "Port number",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "NET_P1_IP0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P1_IP1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P1_IP2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P1_IP3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P2_TYPE": {
    "desc": "Port type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P2_PROTOCOL": {
    "desc": "Protocol",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P2_PORT": {
    "desc": "Port number",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "NET_P2_IP0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P2_IP1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P2_IP2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P2_IP3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P3_TYPE": {
    "desc": "Port type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P3_PROTOCOL": {
    "desc": "Protocol",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P3_PORT": {
    "desc": "Port number",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "NET_P3_IP0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P3_IP1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P3_IP2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P3_IP3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P4_TYPE": {
    "desc": "Port type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P4_PROTOCOL": {
    "desc": "Protocol",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NET_P4_PORT": {
    "desc": "Port number",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "NET_P4_IP0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P4_IP1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P4_IP2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_P4_IP3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_REMPPP_IP0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_REMPPP_IP1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_REMPPP_IP2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_REMPPP_IP3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_TEST_IP0": {
    "desc": "IPv4 Address 1st byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_TEST_IP1": {
    "desc": "IPv4 Address 2nd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_TEST_IP2": {
    "desc": "IPv4 Address 3rd byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NET_TEST_IP3": {
    "desc": "IPv4 Address 4th byte",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "NMEA_RATE_MS": {
    "desc": "NMEA Output rate",
    "range": "20 - 2000",
    "default": "0",
    "unit": "ms"
  },
  "NMEA_MSG_EN": {
    "desc": "Messages Enable bitmask [Bitmask: 0:GPGGA,1:GPRMC,2:PASHR]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_LED_BRIGHT": {
    "desc": "LED Brightness",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_BUZZ_TYPES": {
    "desc": "Buzzer Driver Types [Bitmask: 0:Built-in buzzer, 1:DShot, 2:DroneCAN]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_LED_OVERRIDE": {
    "desc": "Specifies colour source for the RGBLed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_DISPLAY_TYPE": {
    "desc": "Type of on-board I2C display",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_OREO_THEME": {
    "desc": "OreoLED Theme",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_BUZZ_PIN": {
    "desc": "Buzzer pin",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_LED_TYPES": {
    "desc": "LED Driver Types [Bitmask: 0:Built-in LED, 1:Internal ToshibaLED, 2:External ToshibaLED, 3:External PCA9685, 4:Oreo LED, 5:DroneCAN, 6:NCP5623 External, 7:NCP5623 Internal, 8:NeoPixel, 9:ProfiLED, 10:Scripting, 11:DShot, 12:ProfiLED_SPI, 13:LP5562 External, 14: LP5562 Internal, 15:IS31FL3195 External, 16: IS31FL3195 Internal, 17: DiscreteRGB, 18: NeoPixelRGB, 19:ProfiLED_IOMCU]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_BUZZ_ON_LVL": {
    "desc": "Buzzer-on pin logic level",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "NTF_BUZZ_VOLUME": {
    "desc": "Buzzer volume",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "NTF_LED_LEN": {
    "desc": "Serial LED String Length",
    "range": "1 - 32",
    "default": "0",
    "unit": ""
  },
  "OA_TYPE": {
    "desc": "Object Avoidance Path Planning algorithm to use",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OA_MARGIN_MAX": {
    "desc": "Object Avoidance wide margin distance",
    "range": "0.1 - 100",
    "default": "0",
    "unit": "m"
  },
  "OA_OPTIONS": {
    "desc": "Options while recovering from Object Avoidance [Bitmask: 1:log Dijkstra points, 2:Allow fast waypoints (Dijkastras only)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OA_BR_LOOKAHEAD": {
    "desc": "Object Avoidance look ahead distance maximum",
    "range": "1 - 100",
    "default": "0",
    "unit": "m"
  },
  "OA_BR_CONT_RATIO": {
    "desc": "Obstacle Avoidance margin ratio for BendyRuler to change bearing significantly",
    "range": "1.1 - 2",
    "default": "0",
    "unit": ""
  },
  "OA_BR_CONT_ANGLE": {
    "desc": "BendyRuler's bearing change resistance threshold angle",
    "range": "20 - 180",
    "default": "0",
    "unit": ""
  },
  "OA_BR_TYPE": {
    "desc": "Type of BendyRuler",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OA_DB_SIZE": {
    "desc": "OADatabase maximum number of points",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "OA_DB_EXPIRE": {
    "desc": "OADatabase item timeout",
    "range": "0 - 500",
    "default": "0",
    "unit": "s"
  },
  "OA_DB_QUEUE_SIZE": {
    "desc": "OADatabase queue maximum number of points",
    "range": "1 - 200",
    "default": "0",
    "unit": ""
  },
  "OA_DB_OUTPUT": {
    "desc": "OADatabase output level",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OA_DB_BEAM_WIDTH": {
    "desc": "OADatabase beam width",
    "range": "1 - 10",
    "default": "0",
    "unit": "deg"
  },
  "OA_DB_RADIUS_MIN": {
    "desc": "OADatabase Minimum  radius",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "OA_DB_DIST_MAX": {
    "desc": "OADatabase Distance Maximum",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "OA_DB_ALT_MIN": {
    "desc": "OADatabase minimum altitude above home before storing obstacles",
    "range": "0 - 4",
    "default": "0",
    "unit": "m"
  },
  "OSD_TYPE": {
    "desc": "OSD type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD_CHAN": {
    "desc": "Screen switch transmitter channel",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD_SW_METHOD": {
    "desc": "Screen switch method",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD_OPTIONS": {
    "desc": "OSD Options [Bitmask: 0:UseDecimalPack, 1:InvertedWindArrow, 2:InvertedAHRoll, 3:Convert feet to miles at 5280ft instead of 10000ft, 4:DisableCrosshair, 5:TranslateArrows, 6:AviationStyleAH, 7:Prefix LQ with RF Mode]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD_FONT": {
    "desc": "OSD Font",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD_V_OFFSET": {
    "desc": "OSD vertical offset",
    "range": "0 - 31",
    "default": "0",
    "unit": ""
  },
  "OSD_H_OFFSET": {
    "desc": "OSD horizontal offset",
    "range": "0 - 63",
    "default": "0",
    "unit": ""
  },
  "OSD_W_RSSI": {
    "desc": "RSSI warn level (in %)",
    "range": "-128 - 100",
    "default": "0",
    "unit": ""
  },
  "OSD_W_NSAT": {
    "desc": "NSAT warn level",
    "range": "1 - 30",
    "default": "0",
    "unit": ""
  },
  "OSD_W_BATVOLT": {
    "desc": "BAT_VOLT warn level",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "OSD_UNITS": {
    "desc": "Display Units",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD_MSG_TIME": {
    "desc": "Message display duration in seconds",
    "range": "1 - 20",
    "default": "0",
    "unit": ""
  },
  "OSD_ARM_SCR": {
    "desc": "Arm screen",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "OSD_DSARM_SCR": {
    "desc": "Disarm screen",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "OSD_FS_SCR": {
    "desc": "Failsafe screen",
    "range": "0 - 4",
    "default": "0",
    "unit": ""
  },
  "OSD_BTN_DELAY": {
    "desc": "Button delay",
    "range": "0 - 3000",
    "default": "0",
    "unit": ""
  },
  "OSD_W_TERR": {
    "desc": "Terrain warn level",
    "range": "-1 - 3000",
    "default": "0",
    "unit": "m"
  },
  "OSD_W_AVGCELLV": {
    "desc": "AVGCELLV warn level",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "OSD_CELL_COUNT": {
    "desc": "Battery cell count",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD_W_RESTVOLT": {
    "desc": "RESTVOLT warn level",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "OSD_W_ACRVOLT": {
    "desc": "Avg Cell Resting Volt warn level",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "OSD_W_LQ": {
    "desc": "RC link quality warn level (in %)",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "OSD_W_SNR": {
    "desc": "RC link SNR warn level (in %)",
    "range": "-20 - 10",
    "default": "0",
    "unit": ""
  },
  "OSD_SB_H_OFS": {
    "desc": "Sidebar horizontal offset",
    "range": "0 - 20",
    "default": "0",
    "unit": ""
  },
  "OSD_SB_V_EXT": {
    "desc": "Sidebar vertical extension",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "OSD_TYPE2": {
    "desc": "OSD type 2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ENABLE": {
    "desc": "Enable screen",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CHAN_MIN": {
    "desc": "Transmitter switch screen minimum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD1_CHAN_MAX": {
    "desc": "Transmitter switch screen maximum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD1_ALTITUDE_EN": {
    "desc": "ALTITUDE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ALTITUDE_X": {
    "desc": "ALTITUDE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ALTITUDE_Y": {
    "desc": "ALTITUDE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT_VOLT_EN": {
    "desc": "BATVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT_VOLT_X": {
    "desc": "BATVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT_VOLT_Y": {
    "desc": "BATVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RSSI_EN": {
    "desc": "RSSI_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RSSI_X": {
    "desc": "RSSI_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RSSI_Y": {
    "desc": "RSSI_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_CURRENT_EN": {
    "desc": "CURRENT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CURRENT_X": {
    "desc": "CURRENT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_CURRENT_Y": {
    "desc": "CURRENT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_BATUSED_EN": {
    "desc": "BATUSED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_BATUSED_X": {
    "desc": "BATUSED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_BATUSED_Y": {
    "desc": "BATUSED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_SATS_EN": {
    "desc": "SATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_SATS_X": {
    "desc": "SATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_SATS_Y": {
    "desc": "SATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_FLTMODE_EN": {
    "desc": "FLTMODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_FLTMODE_X": {
    "desc": "FLTMODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_FLTMODE_Y": {
    "desc": "FLTMODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_MESSAGE_EN": {
    "desc": "MESSAGE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_MESSAGE_X": {
    "desc": "MESSAGE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_MESSAGE_Y": {
    "desc": "MESSAGE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_GSPEED_EN": {
    "desc": "GSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_GSPEED_X": {
    "desc": "GSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_GSPEED_Y": {
    "desc": "GSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_HORIZON_EN": {
    "desc": "HORIZON_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_HORIZON_X": {
    "desc": "HORIZON_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_HORIZON_Y": {
    "desc": "HORIZON_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOME_EN": {
    "desc": "HOME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOME_X": {
    "desc": "HOME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOME_Y": {
    "desc": "HOME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_HEADING_EN": {
    "desc": "HEADING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_HEADING_X": {
    "desc": "HEADING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_HEADING_Y": {
    "desc": "HEADING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_THROTTLE_EN": {
    "desc": "THROTTLE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_THROTTLE_X": {
    "desc": "THROTTLE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_THROTTLE_Y": {
    "desc": "THROTTLE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_COMPASS_EN": {
    "desc": "COMPASS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_COMPASS_X": {
    "desc": "COMPASS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_COMPASS_Y": {
    "desc": "COMPASS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_WIND_EN": {
    "desc": "WIND_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_WIND_X": {
    "desc": "WIND_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_WIND_Y": {
    "desc": "WIND_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPEED_EN": {
    "desc": "ASPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPEED_X": {
    "desc": "ASPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPEED_Y": {
    "desc": "ASPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_VSPEED_EN": {
    "desc": "VSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_VSPEED_X": {
    "desc": "VSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_VSPEED_Y": {
    "desc": "VSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCTEMP_EN": {
    "desc": "ESCTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCTEMP_X": {
    "desc": "ESCTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCTEMP_Y": {
    "desc": "ESCTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCRPM_EN": {
    "desc": "ESCRPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCRPM_X": {
    "desc": "ESCRPM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCRPM_Y": {
    "desc": "ESCRPM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCAMPS_EN": {
    "desc": "ESCAMPS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCAMPS_X": {
    "desc": "ESCAMPS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESCAMPS_Y": {
    "desc": "ESCAMPS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_GPSLAT_EN": {
    "desc": "GPSLAT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_GPSLAT_X": {
    "desc": "GPSLAT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_GPSLAT_Y": {
    "desc": "GPSLAT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_GPSLONG_EN": {
    "desc": "GPSLONG_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_GPSLONG_X": {
    "desc": "GPSLONG_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_GPSLONG_Y": {
    "desc": "GPSLONG_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ROLL_EN": {
    "desc": "ROLL_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ROLL_X": {
    "desc": "ROLL_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ROLL_Y": {
    "desc": "ROLL_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_PITCH_EN": {
    "desc": "PITCH_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_PITCH_X": {
    "desc": "PITCH_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_PITCH_Y": {
    "desc": "PITCH_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_TEMP_EN": {
    "desc": "TEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_TEMP_X": {
    "desc": "TEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_TEMP_Y": {
    "desc": "TEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_HDOP_EN": {
    "desc": "HDOP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_HDOP_X": {
    "desc": "HDOP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_HDOP_Y": {
    "desc": "HDOP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_WAYPOINT_EN": {
    "desc": "WAYPOINT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_WAYPOINT_X": {
    "desc": "WAYPOINT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_WAYPOINT_Y": {
    "desc": "WAYPOINT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_XTRACK_EN": {
    "desc": "XTRACK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_XTRACK_X": {
    "desc": "XTRACK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_XTRACK_Y": {
    "desc": "XTRACK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_DIST_EN": {
    "desc": "DIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_DIST_X": {
    "desc": "DIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_DIST_Y": {
    "desc": "DIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_STATS_EN": {
    "desc": "STATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_STATS_X": {
    "desc": "STATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_STATS_Y": {
    "desc": "STATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_FLTIME_EN": {
    "desc": "FLTIME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_FLTIME_X": {
    "desc": "FLTIME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_FLTIME_Y": {
    "desc": "FLTIME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_CLIMBEFF_EN": {
    "desc": "CLIMBEFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CLIMBEFF_X": {
    "desc": "CLIMBEFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_CLIMBEFF_Y": {
    "desc": "CLIMBEFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_EFF_EN": {
    "desc": "EFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_EFF_X": {
    "desc": "EFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_EFF_Y": {
    "desc": "EFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_BTEMP_EN": {
    "desc": "BTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_BTEMP_X": {
    "desc": "BTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_BTEMP_Y": {
    "desc": "BTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ATEMP_EN": {
    "desc": "ATEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ATEMP_X": {
    "desc": "ATEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ATEMP_Y": {
    "desc": "ATEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT2_VLT_EN": {
    "desc": "BAT2VLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT2_VLT_X": {
    "desc": "BAT2VLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT2_VLT_Y": {
    "desc": "BAT2VLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT2USED_EN": {
    "desc": "BAT2USED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT2USED_X": {
    "desc": "BAT2USED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_BAT2USED_Y": {
    "desc": "BAT2USED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPD2_EN": {
    "desc": "ASPD2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPD2_X": {
    "desc": "ASPD2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPD2_Y": {
    "desc": "ASPD2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPD1_EN": {
    "desc": "ASPD1_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPD1_X": {
    "desc": "ASPD1_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ASPD1_Y": {
    "desc": "ASPD1_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_CLK_EN": {
    "desc": "CLK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CLK_X": {
    "desc": "CLK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_CLK_Y": {
    "desc": "CLK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_SIDEBARS_EN": {
    "desc": "SIDEBARS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_SIDEBARS_X": {
    "desc": "SIDEBARS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_SIDEBARS_Y": {
    "desc": "SIDEBARS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_CRSSHAIR_EN": {
    "desc": "CRSSHAIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CRSSHAIR_X": {
    "desc": "CRSSHAIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_CRSSHAIR_Y": {
    "desc": "CRSSHAIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOMEDIST_EN": {
    "desc": "HOMEDIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOMEDIST_X": {
    "desc": "HOMEDIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOMEDIST_Y": {
    "desc": "HOMEDIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOMEDIR_EN": {
    "desc": "HOMEDIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOMEDIR_X": {
    "desc": "HOMEDIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_HOMEDIR_Y": {
    "desc": "HOMEDIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_POWER_EN": {
    "desc": "POWER_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_POWER_X": {
    "desc": "POWER_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_POWER_Y": {
    "desc": "POWER_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_CELLVOLT_EN": {
    "desc": "CELL_VOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CELLVOLT_X": {
    "desc": "CELL_VOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_CELLVOLT_Y": {
    "desc": "CELL_VOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_BATTBAR_EN": {
    "desc": "BATT_BAR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_BATTBAR_X": {
    "desc": "BATT_BAR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_BATTBAR_Y": {
    "desc": "BATT_BAR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ARMING_EN": {
    "desc": "ARMING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ARMING_X": {
    "desc": "ARMING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ARMING_Y": {
    "desc": "ARMING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_PLUSCODE_EN": {
    "desc": "PLUSCODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_PLUSCODE_X": {
    "desc": "PLUSCODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_PLUSCODE_Y": {
    "desc": "PLUSCODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_CALLSIGN_EN": {
    "desc": "CALLSIGN_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CALLSIGN_X": {
    "desc": "CALLSIGN_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_CALLSIGN_Y": {
    "desc": "CALLSIGN_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_CURRENT2_EN": {
    "desc": "CURRENT2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_CURRENT2_X": {
    "desc": "CURRENT2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_CURRENT2_Y": {
    "desc": "CURRENT2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_VTX_PWR_EN": {
    "desc": "VTX_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_VTX_PWR_X": {
    "desc": "VTX_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_VTX_PWR_Y": {
    "desc": "VTX_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_TER_HGT_EN": {
    "desc": "TER_HGT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_TER_HGT_X": {
    "desc": "TER_HGT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_TER_HGT_Y": {
    "desc": "TER_HGT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_AVGCELLV_EN": {
    "desc": "AVGCELLV_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_AVGCELLV_X": {
    "desc": "AVGCELLV_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_AVGCELLV_Y": {
    "desc": "AVGCELLV_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RESTVOLT_EN": {
    "desc": "RESTVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RESTVOLT_X": {
    "desc": "RESTVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RESTVOLT_Y": {
    "desc": "RESTVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_FENCE_EN": {
    "desc": "FENCE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_FENCE_X": {
    "desc": "FENCE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_FENCE_Y": {
    "desc": "FENCE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RNGF_EN": {
    "desc": "RNGF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RNGF_X": {
    "desc": "RNGF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RNGF_Y": {
    "desc": "RNGF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ACRVOLT_EN": {
    "desc": "ACRVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_ACRVOLT_X": {
    "desc": "ACRVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_ACRVOLT_Y": {
    "desc": "ACRVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RPM_EN": {
    "desc": "RPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RPM_X": {
    "desc": "RPM_X",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD1_RPM_Y": {
    "desc": "RPM_Y",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD1_LINK_Q_EN": {
    "desc": "LINK_Q_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_LINK_Q_X": {
    "desc": "LINK_Q_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_LINK_Q_Y": {
    "desc": "LINK_Q_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_TXT_RES": {
    "desc": "Sets the overlay text resolution (MSP DisplayPort only)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_FONT": {
    "desc": "Sets the font index for this screen (MSP DisplayPort only)",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_PWR_EN": {
    "desc": "RC_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_PWR_X": {
    "desc": "RC_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_PWR_Y": {
    "desc": "RC_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RSSIDBM_EN": {
    "desc": "RSSIDBM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RSSIDBM_X": {
    "desc": "RSSIDBM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RSSIDBM_Y": {
    "desc": "RSSIDBM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_SNR_EN": {
    "desc": "RC_SNR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_SNR_X": {
    "desc": "RC_SNR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_SNR_Y": {
    "desc": "RC_SNR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_ANT_EN": {
    "desc": "RC_ANT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_ANT_X": {
    "desc": "RC_ANT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_ANT_Y": {
    "desc": "RC_ANT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_LQ_EN": {
    "desc": "RC_LQ_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_LQ_X": {
    "desc": "RC_LQ_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD1_RC_LQ_Y": {
    "desc": "RC_LQ_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD1_ESC_IDX": {
    "desc": "ESC_IDX",
    "range": "0 - 32",
    "default": "0",
    "unit": ""
  },
  "OSD2_ENABLE": {
    "desc": "Enable screen",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CHAN_MIN": {
    "desc": "Transmitter switch screen minimum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD2_CHAN_MAX": {
    "desc": "Transmitter switch screen maximum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD2_ALTITUDE_EN": {
    "desc": "ALTITUDE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ALTITUDE_X": {
    "desc": "ALTITUDE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ALTITUDE_Y": {
    "desc": "ALTITUDE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT_VOLT_EN": {
    "desc": "BATVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT_VOLT_X": {
    "desc": "BATVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT_VOLT_Y": {
    "desc": "BATVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RSSI_EN": {
    "desc": "RSSI_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RSSI_X": {
    "desc": "RSSI_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RSSI_Y": {
    "desc": "RSSI_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_CURRENT_EN": {
    "desc": "CURRENT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CURRENT_X": {
    "desc": "CURRENT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_CURRENT_Y": {
    "desc": "CURRENT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_BATUSED_EN": {
    "desc": "BATUSED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_BATUSED_X": {
    "desc": "BATUSED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_BATUSED_Y": {
    "desc": "BATUSED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_SATS_EN": {
    "desc": "SATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_SATS_X": {
    "desc": "SATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_SATS_Y": {
    "desc": "SATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_FLTMODE_EN": {
    "desc": "FLTMODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_FLTMODE_X": {
    "desc": "FLTMODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_FLTMODE_Y": {
    "desc": "FLTMODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_MESSAGE_EN": {
    "desc": "MESSAGE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_MESSAGE_X": {
    "desc": "MESSAGE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_MESSAGE_Y": {
    "desc": "MESSAGE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_GSPEED_EN": {
    "desc": "GSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_GSPEED_X": {
    "desc": "GSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_GSPEED_Y": {
    "desc": "GSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_HORIZON_EN": {
    "desc": "HORIZON_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_HORIZON_X": {
    "desc": "HORIZON_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_HORIZON_Y": {
    "desc": "HORIZON_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOME_EN": {
    "desc": "HOME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOME_X": {
    "desc": "HOME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOME_Y": {
    "desc": "HOME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_HEADING_EN": {
    "desc": "HEADING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_HEADING_X": {
    "desc": "HEADING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_HEADING_Y": {
    "desc": "HEADING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_THROTTLE_EN": {
    "desc": "THROTTLE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_THROTTLE_X": {
    "desc": "THROTTLE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_THROTTLE_Y": {
    "desc": "THROTTLE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_COMPASS_EN": {
    "desc": "COMPASS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_COMPASS_X": {
    "desc": "COMPASS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_COMPASS_Y": {
    "desc": "COMPASS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_WIND_EN": {
    "desc": "WIND_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_WIND_X": {
    "desc": "WIND_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_WIND_Y": {
    "desc": "WIND_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPEED_EN": {
    "desc": "ASPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPEED_X": {
    "desc": "ASPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPEED_Y": {
    "desc": "ASPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_VSPEED_EN": {
    "desc": "VSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_VSPEED_X": {
    "desc": "VSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_VSPEED_Y": {
    "desc": "VSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCTEMP_EN": {
    "desc": "ESCTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCTEMP_X": {
    "desc": "ESCTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCTEMP_Y": {
    "desc": "ESCTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCRPM_EN": {
    "desc": "ESCRPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCRPM_X": {
    "desc": "ESCRPM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCRPM_Y": {
    "desc": "ESCRPM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCAMPS_EN": {
    "desc": "ESCAMPS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCAMPS_X": {
    "desc": "ESCAMPS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESCAMPS_Y": {
    "desc": "ESCAMPS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_GPSLAT_EN": {
    "desc": "GPSLAT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_GPSLAT_X": {
    "desc": "GPSLAT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_GPSLAT_Y": {
    "desc": "GPSLAT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_GPSLONG_EN": {
    "desc": "GPSLONG_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_GPSLONG_X": {
    "desc": "GPSLONG_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_GPSLONG_Y": {
    "desc": "GPSLONG_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ROLL_EN": {
    "desc": "ROLL_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ROLL_X": {
    "desc": "ROLL_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ROLL_Y": {
    "desc": "ROLL_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_PITCH_EN": {
    "desc": "PITCH_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_PITCH_X": {
    "desc": "PITCH_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_PITCH_Y": {
    "desc": "PITCH_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_TEMP_EN": {
    "desc": "TEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_TEMP_X": {
    "desc": "TEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_TEMP_Y": {
    "desc": "TEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_HDOP_EN": {
    "desc": "HDOP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_HDOP_X": {
    "desc": "HDOP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_HDOP_Y": {
    "desc": "HDOP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_WAYPOINT_EN": {
    "desc": "WAYPOINT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_WAYPOINT_X": {
    "desc": "WAYPOINT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_WAYPOINT_Y": {
    "desc": "WAYPOINT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_XTRACK_EN": {
    "desc": "XTRACK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_XTRACK_X": {
    "desc": "XTRACK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_XTRACK_Y": {
    "desc": "XTRACK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_DIST_EN": {
    "desc": "DIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_DIST_X": {
    "desc": "DIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_DIST_Y": {
    "desc": "DIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_STATS_EN": {
    "desc": "STATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_STATS_X": {
    "desc": "STATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_STATS_Y": {
    "desc": "STATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_FLTIME_EN": {
    "desc": "FLTIME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_FLTIME_X": {
    "desc": "FLTIME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_FLTIME_Y": {
    "desc": "FLTIME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_CLIMBEFF_EN": {
    "desc": "CLIMBEFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CLIMBEFF_X": {
    "desc": "CLIMBEFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_CLIMBEFF_Y": {
    "desc": "CLIMBEFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_EFF_EN": {
    "desc": "EFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_EFF_X": {
    "desc": "EFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_EFF_Y": {
    "desc": "EFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_BTEMP_EN": {
    "desc": "BTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_BTEMP_X": {
    "desc": "BTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_BTEMP_Y": {
    "desc": "BTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ATEMP_EN": {
    "desc": "ATEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ATEMP_X": {
    "desc": "ATEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ATEMP_Y": {
    "desc": "ATEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT2_VLT_EN": {
    "desc": "BAT2VLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT2_VLT_X": {
    "desc": "BAT2VLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT2_VLT_Y": {
    "desc": "BAT2VLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT2USED_EN": {
    "desc": "BAT2USED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT2USED_X": {
    "desc": "BAT2USED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_BAT2USED_Y": {
    "desc": "BAT2USED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPD2_EN": {
    "desc": "ASPD2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPD2_X": {
    "desc": "ASPD2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPD2_Y": {
    "desc": "ASPD2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPD1_EN": {
    "desc": "ASPD1_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPD1_X": {
    "desc": "ASPD1_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ASPD1_Y": {
    "desc": "ASPD1_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_CLK_EN": {
    "desc": "CLK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CLK_X": {
    "desc": "CLK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_CLK_Y": {
    "desc": "CLK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_SIDEBARS_EN": {
    "desc": "SIDEBARS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_SIDEBARS_X": {
    "desc": "SIDEBARS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_SIDEBARS_Y": {
    "desc": "SIDEBARS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_CRSSHAIR_EN": {
    "desc": "CRSSHAIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CRSSHAIR_X": {
    "desc": "CRSSHAIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_CRSSHAIR_Y": {
    "desc": "CRSSHAIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOMEDIST_EN": {
    "desc": "HOMEDIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOMEDIST_X": {
    "desc": "HOMEDIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOMEDIST_Y": {
    "desc": "HOMEDIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOMEDIR_EN": {
    "desc": "HOMEDIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOMEDIR_X": {
    "desc": "HOMEDIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_HOMEDIR_Y": {
    "desc": "HOMEDIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_POWER_EN": {
    "desc": "POWER_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_POWER_X": {
    "desc": "POWER_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_POWER_Y": {
    "desc": "POWER_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_CELLVOLT_EN": {
    "desc": "CELL_VOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CELLVOLT_X": {
    "desc": "CELL_VOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_CELLVOLT_Y": {
    "desc": "CELL_VOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_BATTBAR_EN": {
    "desc": "BATT_BAR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_BATTBAR_X": {
    "desc": "BATT_BAR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_BATTBAR_Y": {
    "desc": "BATT_BAR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ARMING_EN": {
    "desc": "ARMING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ARMING_X": {
    "desc": "ARMING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ARMING_Y": {
    "desc": "ARMING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_PLUSCODE_EN": {
    "desc": "PLUSCODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_PLUSCODE_X": {
    "desc": "PLUSCODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_PLUSCODE_Y": {
    "desc": "PLUSCODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_CALLSIGN_EN": {
    "desc": "CALLSIGN_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CALLSIGN_X": {
    "desc": "CALLSIGN_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_CALLSIGN_Y": {
    "desc": "CALLSIGN_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_CURRENT2_EN": {
    "desc": "CURRENT2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_CURRENT2_X": {
    "desc": "CURRENT2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_CURRENT2_Y": {
    "desc": "CURRENT2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_VTX_PWR_EN": {
    "desc": "VTX_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_VTX_PWR_X": {
    "desc": "VTX_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_VTX_PWR_Y": {
    "desc": "VTX_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_TER_HGT_EN": {
    "desc": "TER_HGT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_TER_HGT_X": {
    "desc": "TER_HGT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_TER_HGT_Y": {
    "desc": "TER_HGT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_AVGCELLV_EN": {
    "desc": "AVGCELLV_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_AVGCELLV_X": {
    "desc": "AVGCELLV_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_AVGCELLV_Y": {
    "desc": "AVGCELLV_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RESTVOLT_EN": {
    "desc": "RESTVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RESTVOLT_X": {
    "desc": "RESTVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RESTVOLT_Y": {
    "desc": "RESTVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_FENCE_EN": {
    "desc": "FENCE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_FENCE_X": {
    "desc": "FENCE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_FENCE_Y": {
    "desc": "FENCE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RNGF_EN": {
    "desc": "RNGF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RNGF_X": {
    "desc": "RNGF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RNGF_Y": {
    "desc": "RNGF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ACRVOLT_EN": {
    "desc": "ACRVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_ACRVOLT_X": {
    "desc": "ACRVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_ACRVOLT_Y": {
    "desc": "ACRVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RPM_EN": {
    "desc": "RPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RPM_X": {
    "desc": "RPM_X",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD2_RPM_Y": {
    "desc": "RPM_Y",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD2_LINK_Q_EN": {
    "desc": "LINK_Q_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_LINK_Q_X": {
    "desc": "LINK_Q_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_LINK_Q_Y": {
    "desc": "LINK_Q_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_TXT_RES": {
    "desc": "Sets the overlay text resolution (MSP DisplayPort only)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_FONT": {
    "desc": "Sets the font index for this screen (MSP DisplayPort only)",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_PWR_EN": {
    "desc": "RC_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_PWR_X": {
    "desc": "RC_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_PWR_Y": {
    "desc": "RC_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RSSIDBM_EN": {
    "desc": "RSSIDBM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RSSIDBM_X": {
    "desc": "RSSIDBM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RSSIDBM_Y": {
    "desc": "RSSIDBM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_SNR_EN": {
    "desc": "RC_SNR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_SNR_X": {
    "desc": "RC_SNR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_SNR_Y": {
    "desc": "RC_SNR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_ANT_EN": {
    "desc": "RC_ANT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_ANT_X": {
    "desc": "RC_ANT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_ANT_Y": {
    "desc": "RC_ANT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_LQ_EN": {
    "desc": "RC_LQ_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_LQ_X": {
    "desc": "RC_LQ_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD2_RC_LQ_Y": {
    "desc": "RC_LQ_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD2_ESC_IDX": {
    "desc": "ESC_IDX",
    "range": "0 - 32",
    "default": "0",
    "unit": ""
  },
  "OSD3_ENABLE": {
    "desc": "Enable screen",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CHAN_MIN": {
    "desc": "Transmitter switch screen minimum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD3_CHAN_MAX": {
    "desc": "Transmitter switch screen maximum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD3_ALTITUDE_EN": {
    "desc": "ALTITUDE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ALTITUDE_X": {
    "desc": "ALTITUDE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ALTITUDE_Y": {
    "desc": "ALTITUDE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT_VOLT_EN": {
    "desc": "BATVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT_VOLT_X": {
    "desc": "BATVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT_VOLT_Y": {
    "desc": "BATVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RSSI_EN": {
    "desc": "RSSI_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RSSI_X": {
    "desc": "RSSI_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RSSI_Y": {
    "desc": "RSSI_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_CURRENT_EN": {
    "desc": "CURRENT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CURRENT_X": {
    "desc": "CURRENT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_CURRENT_Y": {
    "desc": "CURRENT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_BATUSED_EN": {
    "desc": "BATUSED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_BATUSED_X": {
    "desc": "BATUSED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_BATUSED_Y": {
    "desc": "BATUSED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_SATS_EN": {
    "desc": "SATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_SATS_X": {
    "desc": "SATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_SATS_Y": {
    "desc": "SATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_FLTMODE_EN": {
    "desc": "FLTMODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_FLTMODE_X": {
    "desc": "FLTMODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_FLTMODE_Y": {
    "desc": "FLTMODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_MESSAGE_EN": {
    "desc": "MESSAGE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_MESSAGE_X": {
    "desc": "MESSAGE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_MESSAGE_Y": {
    "desc": "MESSAGE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_GSPEED_EN": {
    "desc": "GSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_GSPEED_X": {
    "desc": "GSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_GSPEED_Y": {
    "desc": "GSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_HORIZON_EN": {
    "desc": "HORIZON_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_HORIZON_X": {
    "desc": "HORIZON_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_HORIZON_Y": {
    "desc": "HORIZON_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOME_EN": {
    "desc": "HOME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOME_X": {
    "desc": "HOME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOME_Y": {
    "desc": "HOME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_HEADING_EN": {
    "desc": "HEADING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_HEADING_X": {
    "desc": "HEADING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_HEADING_Y": {
    "desc": "HEADING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_THROTTLE_EN": {
    "desc": "THROTTLE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_THROTTLE_X": {
    "desc": "THROTTLE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_THROTTLE_Y": {
    "desc": "THROTTLE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_COMPASS_EN": {
    "desc": "COMPASS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_COMPASS_X": {
    "desc": "COMPASS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_COMPASS_Y": {
    "desc": "COMPASS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_WIND_EN": {
    "desc": "WIND_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_WIND_X": {
    "desc": "WIND_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_WIND_Y": {
    "desc": "WIND_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPEED_EN": {
    "desc": "ASPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPEED_X": {
    "desc": "ASPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPEED_Y": {
    "desc": "ASPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_VSPEED_EN": {
    "desc": "VSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_VSPEED_X": {
    "desc": "VSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_VSPEED_Y": {
    "desc": "VSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCTEMP_EN": {
    "desc": "ESCTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCTEMP_X": {
    "desc": "ESCTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCTEMP_Y": {
    "desc": "ESCTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCRPM_EN": {
    "desc": "ESCRPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCRPM_X": {
    "desc": "ESCRPM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCRPM_Y": {
    "desc": "ESCRPM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCAMPS_EN": {
    "desc": "ESCAMPS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCAMPS_X": {
    "desc": "ESCAMPS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESCAMPS_Y": {
    "desc": "ESCAMPS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_GPSLAT_EN": {
    "desc": "GPSLAT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_GPSLAT_X": {
    "desc": "GPSLAT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_GPSLAT_Y": {
    "desc": "GPSLAT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_GPSLONG_EN": {
    "desc": "GPSLONG_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_GPSLONG_X": {
    "desc": "GPSLONG_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_GPSLONG_Y": {
    "desc": "GPSLONG_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ROLL_EN": {
    "desc": "ROLL_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ROLL_X": {
    "desc": "ROLL_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ROLL_Y": {
    "desc": "ROLL_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_PITCH_EN": {
    "desc": "PITCH_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_PITCH_X": {
    "desc": "PITCH_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_PITCH_Y": {
    "desc": "PITCH_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_TEMP_EN": {
    "desc": "TEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_TEMP_X": {
    "desc": "TEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_TEMP_Y": {
    "desc": "TEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_HDOP_EN": {
    "desc": "HDOP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_HDOP_X": {
    "desc": "HDOP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_HDOP_Y": {
    "desc": "HDOP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_WAYPOINT_EN": {
    "desc": "WAYPOINT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_WAYPOINT_X": {
    "desc": "WAYPOINT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_WAYPOINT_Y": {
    "desc": "WAYPOINT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_XTRACK_EN": {
    "desc": "XTRACK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_XTRACK_X": {
    "desc": "XTRACK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_XTRACK_Y": {
    "desc": "XTRACK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_DIST_EN": {
    "desc": "DIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_DIST_X": {
    "desc": "DIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_DIST_Y": {
    "desc": "DIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_STATS_EN": {
    "desc": "STATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_STATS_X": {
    "desc": "STATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_STATS_Y": {
    "desc": "STATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_FLTIME_EN": {
    "desc": "FLTIME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_FLTIME_X": {
    "desc": "FLTIME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_FLTIME_Y": {
    "desc": "FLTIME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_CLIMBEFF_EN": {
    "desc": "CLIMBEFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CLIMBEFF_X": {
    "desc": "CLIMBEFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_CLIMBEFF_Y": {
    "desc": "CLIMBEFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_EFF_EN": {
    "desc": "EFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_EFF_X": {
    "desc": "EFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_EFF_Y": {
    "desc": "EFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_BTEMP_EN": {
    "desc": "BTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_BTEMP_X": {
    "desc": "BTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_BTEMP_Y": {
    "desc": "BTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ATEMP_EN": {
    "desc": "ATEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ATEMP_X": {
    "desc": "ATEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ATEMP_Y": {
    "desc": "ATEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT2_VLT_EN": {
    "desc": "BAT2VLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT2_VLT_X": {
    "desc": "BAT2VLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT2_VLT_Y": {
    "desc": "BAT2VLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT2USED_EN": {
    "desc": "BAT2USED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT2USED_X": {
    "desc": "BAT2USED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_BAT2USED_Y": {
    "desc": "BAT2USED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPD2_EN": {
    "desc": "ASPD2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPD2_X": {
    "desc": "ASPD2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPD2_Y": {
    "desc": "ASPD2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPD1_EN": {
    "desc": "ASPD1_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPD1_X": {
    "desc": "ASPD1_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ASPD1_Y": {
    "desc": "ASPD1_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_CLK_EN": {
    "desc": "CLK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CLK_X": {
    "desc": "CLK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_CLK_Y": {
    "desc": "CLK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_SIDEBARS_EN": {
    "desc": "SIDEBARS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_SIDEBARS_X": {
    "desc": "SIDEBARS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_SIDEBARS_Y": {
    "desc": "SIDEBARS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_CRSSHAIR_EN": {
    "desc": "CRSSHAIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CRSSHAIR_X": {
    "desc": "CRSSHAIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_CRSSHAIR_Y": {
    "desc": "CRSSHAIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOMEDIST_EN": {
    "desc": "HOMEDIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOMEDIST_X": {
    "desc": "HOMEDIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOMEDIST_Y": {
    "desc": "HOMEDIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOMEDIR_EN": {
    "desc": "HOMEDIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOMEDIR_X": {
    "desc": "HOMEDIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_HOMEDIR_Y": {
    "desc": "HOMEDIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_POWER_EN": {
    "desc": "POWER_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_POWER_X": {
    "desc": "POWER_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_POWER_Y": {
    "desc": "POWER_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_CELLVOLT_EN": {
    "desc": "CELL_VOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CELLVOLT_X": {
    "desc": "CELL_VOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_CELLVOLT_Y": {
    "desc": "CELL_VOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_BATTBAR_EN": {
    "desc": "BATT_BAR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_BATTBAR_X": {
    "desc": "BATT_BAR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_BATTBAR_Y": {
    "desc": "BATT_BAR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ARMING_EN": {
    "desc": "ARMING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ARMING_X": {
    "desc": "ARMING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ARMING_Y": {
    "desc": "ARMING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_PLUSCODE_EN": {
    "desc": "PLUSCODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_PLUSCODE_X": {
    "desc": "PLUSCODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_PLUSCODE_Y": {
    "desc": "PLUSCODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_CALLSIGN_EN": {
    "desc": "CALLSIGN_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CALLSIGN_X": {
    "desc": "CALLSIGN_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_CALLSIGN_Y": {
    "desc": "CALLSIGN_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_CURRENT2_EN": {
    "desc": "CURRENT2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_CURRENT2_X": {
    "desc": "CURRENT2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_CURRENT2_Y": {
    "desc": "CURRENT2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_VTX_PWR_EN": {
    "desc": "VTX_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_VTX_PWR_X": {
    "desc": "VTX_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_VTX_PWR_Y": {
    "desc": "VTX_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_TER_HGT_EN": {
    "desc": "TER_HGT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_TER_HGT_X": {
    "desc": "TER_HGT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_TER_HGT_Y": {
    "desc": "TER_HGT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_AVGCELLV_EN": {
    "desc": "AVGCELLV_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_AVGCELLV_X": {
    "desc": "AVGCELLV_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_AVGCELLV_Y": {
    "desc": "AVGCELLV_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RESTVOLT_EN": {
    "desc": "RESTVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RESTVOLT_X": {
    "desc": "RESTVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RESTVOLT_Y": {
    "desc": "RESTVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_FENCE_EN": {
    "desc": "FENCE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_FENCE_X": {
    "desc": "FENCE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_FENCE_Y": {
    "desc": "FENCE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RNGF_EN": {
    "desc": "RNGF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RNGF_X": {
    "desc": "RNGF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RNGF_Y": {
    "desc": "RNGF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ACRVOLT_EN": {
    "desc": "ACRVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_ACRVOLT_X": {
    "desc": "ACRVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_ACRVOLT_Y": {
    "desc": "ACRVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RPM_EN": {
    "desc": "RPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RPM_X": {
    "desc": "RPM_X",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD3_RPM_Y": {
    "desc": "RPM_Y",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD3_LINK_Q_EN": {
    "desc": "LINK_Q_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_LINK_Q_X": {
    "desc": "LINK_Q_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_LINK_Q_Y": {
    "desc": "LINK_Q_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_TXT_RES": {
    "desc": "Sets the overlay text resolution (MSP DisplayPort only)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_FONT": {
    "desc": "Sets the font index for this screen (MSP DisplayPort only)",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_PWR_EN": {
    "desc": "RC_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_PWR_X": {
    "desc": "RC_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_PWR_Y": {
    "desc": "RC_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RSSIDBM_EN": {
    "desc": "RSSIDBM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RSSIDBM_X": {
    "desc": "RSSIDBM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RSSIDBM_Y": {
    "desc": "RSSIDBM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_SNR_EN": {
    "desc": "RC_SNR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_SNR_X": {
    "desc": "RC_SNR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_SNR_Y": {
    "desc": "RC_SNR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_ANT_EN": {
    "desc": "RC_ANT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_ANT_X": {
    "desc": "RC_ANT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_ANT_Y": {
    "desc": "RC_ANT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_LQ_EN": {
    "desc": "RC_LQ_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_LQ_X": {
    "desc": "RC_LQ_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD3_RC_LQ_Y": {
    "desc": "RC_LQ_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD3_ESC_IDX": {
    "desc": "ESC_IDX",
    "range": "0 - 32",
    "default": "0",
    "unit": ""
  },
  "OSD4_ENABLE": {
    "desc": "Enable screen",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CHAN_MIN": {
    "desc": "Transmitter switch screen minimum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD4_CHAN_MAX": {
    "desc": "Transmitter switch screen maximum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD4_ALTITUDE_EN": {
    "desc": "ALTITUDE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ALTITUDE_X": {
    "desc": "ALTITUDE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ALTITUDE_Y": {
    "desc": "ALTITUDE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT_VOLT_EN": {
    "desc": "BATVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT_VOLT_X": {
    "desc": "BATVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT_VOLT_Y": {
    "desc": "BATVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RSSI_EN": {
    "desc": "RSSI_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RSSI_X": {
    "desc": "RSSI_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RSSI_Y": {
    "desc": "RSSI_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_CURRENT_EN": {
    "desc": "CURRENT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CURRENT_X": {
    "desc": "CURRENT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_CURRENT_Y": {
    "desc": "CURRENT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_BATUSED_EN": {
    "desc": "BATUSED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_BATUSED_X": {
    "desc": "BATUSED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_BATUSED_Y": {
    "desc": "BATUSED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_SATS_EN": {
    "desc": "SATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_SATS_X": {
    "desc": "SATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_SATS_Y": {
    "desc": "SATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_FLTMODE_EN": {
    "desc": "FLTMODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_FLTMODE_X": {
    "desc": "FLTMODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_FLTMODE_Y": {
    "desc": "FLTMODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_MESSAGE_EN": {
    "desc": "MESSAGE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_MESSAGE_X": {
    "desc": "MESSAGE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_MESSAGE_Y": {
    "desc": "MESSAGE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_GSPEED_EN": {
    "desc": "GSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_GSPEED_X": {
    "desc": "GSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_GSPEED_Y": {
    "desc": "GSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_HORIZON_EN": {
    "desc": "HORIZON_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_HORIZON_X": {
    "desc": "HORIZON_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_HORIZON_Y": {
    "desc": "HORIZON_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOME_EN": {
    "desc": "HOME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOME_X": {
    "desc": "HOME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOME_Y": {
    "desc": "HOME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_HEADING_EN": {
    "desc": "HEADING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_HEADING_X": {
    "desc": "HEADING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_HEADING_Y": {
    "desc": "HEADING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_THROTTLE_EN": {
    "desc": "THROTTLE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_THROTTLE_X": {
    "desc": "THROTTLE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_THROTTLE_Y": {
    "desc": "THROTTLE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_COMPASS_EN": {
    "desc": "COMPASS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_COMPASS_X": {
    "desc": "COMPASS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_COMPASS_Y": {
    "desc": "COMPASS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_WIND_EN": {
    "desc": "WIND_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_WIND_X": {
    "desc": "WIND_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_WIND_Y": {
    "desc": "WIND_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPEED_EN": {
    "desc": "ASPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPEED_X": {
    "desc": "ASPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPEED_Y": {
    "desc": "ASPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_VSPEED_EN": {
    "desc": "VSPEED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_VSPEED_X": {
    "desc": "VSPEED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_VSPEED_Y": {
    "desc": "VSPEED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCTEMP_EN": {
    "desc": "ESCTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCTEMP_X": {
    "desc": "ESCTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCTEMP_Y": {
    "desc": "ESCTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCRPM_EN": {
    "desc": "ESCRPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCRPM_X": {
    "desc": "ESCRPM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCRPM_Y": {
    "desc": "ESCRPM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCAMPS_EN": {
    "desc": "ESCAMPS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCAMPS_X": {
    "desc": "ESCAMPS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESCAMPS_Y": {
    "desc": "ESCAMPS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_GPSLAT_EN": {
    "desc": "GPSLAT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_GPSLAT_X": {
    "desc": "GPSLAT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_GPSLAT_Y": {
    "desc": "GPSLAT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_GPSLONG_EN": {
    "desc": "GPSLONG_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_GPSLONG_X": {
    "desc": "GPSLONG_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_GPSLONG_Y": {
    "desc": "GPSLONG_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ROLL_EN": {
    "desc": "ROLL_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ROLL_X": {
    "desc": "ROLL_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ROLL_Y": {
    "desc": "ROLL_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_PITCH_EN": {
    "desc": "PITCH_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_PITCH_X": {
    "desc": "PITCH_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_PITCH_Y": {
    "desc": "PITCH_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_TEMP_EN": {
    "desc": "TEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_TEMP_X": {
    "desc": "TEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_TEMP_Y": {
    "desc": "TEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_HDOP_EN": {
    "desc": "HDOP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_HDOP_X": {
    "desc": "HDOP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_HDOP_Y": {
    "desc": "HDOP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_WAYPOINT_EN": {
    "desc": "WAYPOINT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_WAYPOINT_X": {
    "desc": "WAYPOINT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_WAYPOINT_Y": {
    "desc": "WAYPOINT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_XTRACK_EN": {
    "desc": "XTRACK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_XTRACK_X": {
    "desc": "XTRACK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_XTRACK_Y": {
    "desc": "XTRACK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_DIST_EN": {
    "desc": "DIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_DIST_X": {
    "desc": "DIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_DIST_Y": {
    "desc": "DIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_STATS_EN": {
    "desc": "STATS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_STATS_X": {
    "desc": "STATS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_STATS_Y": {
    "desc": "STATS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_FLTIME_EN": {
    "desc": "FLTIME_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_FLTIME_X": {
    "desc": "FLTIME_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_FLTIME_Y": {
    "desc": "FLTIME_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_CLIMBEFF_EN": {
    "desc": "CLIMBEFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CLIMBEFF_X": {
    "desc": "CLIMBEFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_CLIMBEFF_Y": {
    "desc": "CLIMBEFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_EFF_EN": {
    "desc": "EFF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_EFF_X": {
    "desc": "EFF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_EFF_Y": {
    "desc": "EFF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_BTEMP_EN": {
    "desc": "BTEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_BTEMP_X": {
    "desc": "BTEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_BTEMP_Y": {
    "desc": "BTEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ATEMP_EN": {
    "desc": "ATEMP_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ATEMP_X": {
    "desc": "ATEMP_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ATEMP_Y": {
    "desc": "ATEMP_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT2_VLT_EN": {
    "desc": "BAT2VLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT2_VLT_X": {
    "desc": "BAT2VLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT2_VLT_Y": {
    "desc": "BAT2VLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT2USED_EN": {
    "desc": "BAT2USED_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT2USED_X": {
    "desc": "BAT2USED_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_BAT2USED_Y": {
    "desc": "BAT2USED_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPD2_EN": {
    "desc": "ASPD2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPD2_X": {
    "desc": "ASPD2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPD2_Y": {
    "desc": "ASPD2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPD1_EN": {
    "desc": "ASPD1_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPD1_X": {
    "desc": "ASPD1_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ASPD1_Y": {
    "desc": "ASPD1_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_CLK_EN": {
    "desc": "CLK_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CLK_X": {
    "desc": "CLK_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_CLK_Y": {
    "desc": "CLK_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_SIDEBARS_EN": {
    "desc": "SIDEBARS_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_SIDEBARS_X": {
    "desc": "SIDEBARS_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_SIDEBARS_Y": {
    "desc": "SIDEBARS_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_CRSSHAIR_EN": {
    "desc": "CRSSHAIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CRSSHAIR_X": {
    "desc": "CRSSHAIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_CRSSHAIR_Y": {
    "desc": "CRSSHAIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOMEDIST_EN": {
    "desc": "HOMEDIST_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOMEDIST_X": {
    "desc": "HOMEDIST_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOMEDIST_Y": {
    "desc": "HOMEDIST_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOMEDIR_EN": {
    "desc": "HOMEDIR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOMEDIR_X": {
    "desc": "HOMEDIR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_HOMEDIR_Y": {
    "desc": "HOMEDIR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_POWER_EN": {
    "desc": "POWER_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_POWER_X": {
    "desc": "POWER_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_POWER_Y": {
    "desc": "POWER_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_CELLVOLT_EN": {
    "desc": "CELL_VOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CELLVOLT_X": {
    "desc": "CELL_VOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_CELLVOLT_Y": {
    "desc": "CELL_VOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_BATTBAR_EN": {
    "desc": "BATT_BAR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_BATTBAR_X": {
    "desc": "BATT_BAR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_BATTBAR_Y": {
    "desc": "BATT_BAR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ARMING_EN": {
    "desc": "ARMING_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ARMING_X": {
    "desc": "ARMING_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ARMING_Y": {
    "desc": "ARMING_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_PLUSCODE_EN": {
    "desc": "PLUSCODE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_PLUSCODE_X": {
    "desc": "PLUSCODE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_PLUSCODE_Y": {
    "desc": "PLUSCODE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_CALLSIGN_EN": {
    "desc": "CALLSIGN_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CALLSIGN_X": {
    "desc": "CALLSIGN_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_CALLSIGN_Y": {
    "desc": "CALLSIGN_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_CURRENT2_EN": {
    "desc": "CURRENT2_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_CURRENT2_X": {
    "desc": "CURRENT2_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_CURRENT2_Y": {
    "desc": "CURRENT2_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_VTX_PWR_EN": {
    "desc": "VTX_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_VTX_PWR_X": {
    "desc": "VTX_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_VTX_PWR_Y": {
    "desc": "VTX_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_TER_HGT_EN": {
    "desc": "TER_HGT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_TER_HGT_X": {
    "desc": "TER_HGT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_TER_HGT_Y": {
    "desc": "TER_HGT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_AVGCELLV_EN": {
    "desc": "AVGCELLV_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_AVGCELLV_X": {
    "desc": "AVGCELLV_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_AVGCELLV_Y": {
    "desc": "AVGCELLV_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RESTVOLT_EN": {
    "desc": "RESTVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RESTVOLT_X": {
    "desc": "RESTVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RESTVOLT_Y": {
    "desc": "RESTVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_FENCE_EN": {
    "desc": "FENCE_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_FENCE_X": {
    "desc": "FENCE_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_FENCE_Y": {
    "desc": "FENCE_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RNGF_EN": {
    "desc": "RNGF_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RNGF_X": {
    "desc": "RNGF_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RNGF_Y": {
    "desc": "RNGF_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ACRVOLT_EN": {
    "desc": "ACRVOLT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_ACRVOLT_X": {
    "desc": "ACRVOLT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_ACRVOLT_Y": {
    "desc": "ACRVOLT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RPM_EN": {
    "desc": "RPM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RPM_X": {
    "desc": "RPM_X",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD4_RPM_Y": {
    "desc": "RPM_Y",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD4_LINK_Q_EN": {
    "desc": "LINK_Q_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_LINK_Q_X": {
    "desc": "LINK_Q_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_LINK_Q_Y": {
    "desc": "LINK_Q_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_TXT_RES": {
    "desc": "Sets the overlay text resolution (MSP DisplayPort only)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_FONT": {
    "desc": "Sets the font index for this screen (MSP DisplayPort only)",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_PWR_EN": {
    "desc": "RC_PWR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_PWR_X": {
    "desc": "RC_PWR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_PWR_Y": {
    "desc": "RC_PWR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RSSIDBM_EN": {
    "desc": "RSSIDBM_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RSSIDBM_X": {
    "desc": "RSSIDBM_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RSSIDBM_Y": {
    "desc": "RSSIDBM_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_SNR_EN": {
    "desc": "RC_SNR_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_SNR_X": {
    "desc": "RC_SNR_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_SNR_Y": {
    "desc": "RC_SNR_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_ANT_EN": {
    "desc": "RC_ANT_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_ANT_X": {
    "desc": "RC_ANT_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_ANT_Y": {
    "desc": "RC_ANT_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_LQ_EN": {
    "desc": "RC_LQ_EN",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_LQ_X": {
    "desc": "RC_LQ_X",
    "range": "0 - 59",
    "default": "0",
    "unit": ""
  },
  "OSD4_RC_LQ_Y": {
    "desc": "RC_LQ_Y",
    "range": "0 - 21",
    "default": "0",
    "unit": ""
  },
  "OSD4_ESC_IDX": {
    "desc": "ESC_IDX",
    "range": "0 - 32",
    "default": "0",
    "unit": ""
  },
  "OSD5_ENABLE": {
    "desc": "Enable screen",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_CHAN_MIN": {
    "desc": "Transmitter switch screen minimum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD5_CHAN_MAX": {
    "desc": "Transmitter switch screen maximum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD5_SAVE_X": {
    "desc": "SAVE_X",
    "range": "0 - 25",
    "default": "0",
    "unit": ""
  },
  "OSD5_SAVE_Y": {
    "desc": "SAVE_Y",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM1_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM2_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM3_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM4_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM5_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM6_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM7_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM8_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD5_PARAM9_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_ENABLE": {
    "desc": "Enable screen",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_CHAN_MIN": {
    "desc": "Transmitter switch screen minimum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD6_CHAN_MAX": {
    "desc": "Transmitter switch screen maximum pwm",
    "range": "900 - 2100",
    "default": "0",
    "unit": ""
  },
  "OSD6_SAVE_X": {
    "desc": "SAVE_X",
    "range": "0 - 25",
    "default": "0",
    "unit": ""
  },
  "OSD6_SAVE_Y": {
    "desc": "SAVE_Y",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM1_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM2_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM3_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM4_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM5_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM6_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM7_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM8_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_EN": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_X": {
    "desc": "X position",
    "range": "0 - 29",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_Y": {
    "desc": "Y position",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_KEY": {
    "desc": "Parameter key",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_IDX": {
    "desc": "Parameter index",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_GRP": {
    "desc": "Parameter group",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_MIN": {
    "desc": "Parameter minimum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_MAX": {
    "desc": "Parameter maximum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_INCR": {
    "desc": "Parameter increment",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "OSD6_PARAM9_TYPE": {
    "desc": "Parameter type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_ENABLED": {
    "desc": "Precision Land enabled/disabled",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_TYPE": {
    "desc": "Precision Land Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_YAW_ALIGN": {
    "desc": "Sensor yaw alignment",
    "range": "0 - 36000",
    "default": "0",
    "unit": "cdeg"
  },
  "PLND_LAND_OFS_X": {
    "desc": "Land offset forward",
    "range": "-20 - 20",
    "default": "0",
    "unit": "cm"
  },
  "PLND_LAND_OFS_Y": {
    "desc": "Land offset right",
    "range": "-20 - 20",
    "default": "0",
    "unit": "cm"
  },
  "PLND_EST_TYPE": {
    "desc": "Precision Land Estimator Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_ACC_P_NSE": {
    "desc": "Kalman Filter Accelerometer Noise",
    "range": "0.5 - 5",
    "default": "0",
    "unit": ""
  },
  "PLND_CAM_POS_X": {
    "desc": "Camera X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "PLND_CAM_POS_Y": {
    "desc": "Camera Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "PLND_CAM_POS_Z": {
    "desc": "Camera Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "PLND_BUS": {
    "desc": "Sensor Bus",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_LAG": {
    "desc": "Precision Landing sensor lag",
    "range": "0.02 - 0.250",
    "default": "0",
    "unit": "s"
  },
  "PLND_XY_DIST_MAX": {
    "desc": "Precision Landing maximum distance to target before descending",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "PLND_STRICT": {
    "desc": "PrecLand strictness",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_RET_MAX": {
    "desc": "PrecLand Maximum number of retires for a failed landing",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "PLND_TIMEOUT": {
    "desc": "PrecLand retry timeout",
    "range": "0 - 20",
    "default": "0",
    "unit": "s"
  },
  "PLND_RET_BEHAVE": {
    "desc": "PrecLand retry behaviour",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_ALT_MIN": {
    "desc": "PrecLand minimum alt for retry",
    "range": "0 - 5",
    "default": "0",
    "unit": "m"
  },
  "PLND_ALT_MAX": {
    "desc": "PrecLand maximum alt for retry",
    "range": "0 - 50",
    "default": "0",
    "unit": "m"
  },
  "PLND_OPTIONS": {
    "desc": "Precision Landing Extra Options [Bitmask: 0: Moving Landing Target, 1: Allow Precision Landing after manual reposition, 2: Maintain high speed in final descent]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PLND_ORIENT": {
    "desc": "Camera Orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX_IGN_GND": {
    "desc": "Proximity sensor land detection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX_LOG_RAW": {
    "desc": "Proximity raw distances log",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX_FILT": {
    "desc": "Proximity filter cutoff frequency",
    "range": "0 - 20",
    "default": "0",
    "unit": "Hz"
  },
  "PRX_ALT_MIN": {
    "desc": "Proximity lowest altitude.",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "PRX1_TYPE": {
    "desc": "Proximity type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX1_ORIENT": {
    "desc": "Proximity sensor orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX1_YAW_CORR": {
    "desc": "Proximity sensor yaw correction",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_ANG1": {
    "desc": "Proximity sensor ignore angle 1",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_WID1": {
    "desc": "Proximity sensor ignore width 1",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_ANG2": {
    "desc": "Proximity sensor ignore angle 2",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_WID2": {
    "desc": "Proximity sensor ignore width 2",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_ANG3": {
    "desc": "Proximity sensor ignore angle 3",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_WID3": {
    "desc": "Proximity sensor ignore width 3",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_ANG4": {
    "desc": "Proximity sensor ignore angle 4",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_IGN_WID4": {
    "desc": "Proximity sensor ignore width 4",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX1_MIN": {
    "desc": "Proximity minimum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX1_MAX": {
    "desc": "Proximity maximum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX1_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "PRX1_RECV_ID": {
    "desc": "CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "PRX2_TYPE": {
    "desc": "Proximity type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX2_ORIENT": {
    "desc": "Proximity sensor orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX2_YAW_CORR": {
    "desc": "Proximity sensor yaw correction",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_ANG1": {
    "desc": "Proximity sensor ignore angle 1",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_WID1": {
    "desc": "Proximity sensor ignore width 1",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_ANG2": {
    "desc": "Proximity sensor ignore angle 2",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_WID2": {
    "desc": "Proximity sensor ignore width 2",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_ANG3": {
    "desc": "Proximity sensor ignore angle 3",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_WID3": {
    "desc": "Proximity sensor ignore width 3",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_ANG4": {
    "desc": "Proximity sensor ignore angle 4",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_IGN_WID4": {
    "desc": "Proximity sensor ignore width 4",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX2_MIN": {
    "desc": "Proximity minimum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX2_MAX": {
    "desc": "Proximity maximum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX2_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "PRX2_RECV_ID": {
    "desc": "CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "PRX3_TYPE": {
    "desc": "Proximity type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX3_ORIENT": {
    "desc": "Proximity sensor orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX3_YAW_CORR": {
    "desc": "Proximity sensor yaw correction",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_ANG1": {
    "desc": "Proximity sensor ignore angle 1",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_WID1": {
    "desc": "Proximity sensor ignore width 1",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_ANG2": {
    "desc": "Proximity sensor ignore angle 2",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_WID2": {
    "desc": "Proximity sensor ignore width 2",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_ANG3": {
    "desc": "Proximity sensor ignore angle 3",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_WID3": {
    "desc": "Proximity sensor ignore width 3",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_ANG4": {
    "desc": "Proximity sensor ignore angle 4",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_IGN_WID4": {
    "desc": "Proximity sensor ignore width 4",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX3_MIN": {
    "desc": "Proximity minimum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX3_MAX": {
    "desc": "Proximity maximum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX3_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "PRX3_RECV_ID": {
    "desc": "CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "PRX4_TYPE": {
    "desc": "Proximity type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX4_ORIENT": {
    "desc": "Proximity sensor orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX4_YAW_CORR": {
    "desc": "Proximity sensor yaw correction",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_ANG1": {
    "desc": "Proximity sensor ignore angle 1",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_WID1": {
    "desc": "Proximity sensor ignore width 1",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_ANG2": {
    "desc": "Proximity sensor ignore angle 2",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_WID2": {
    "desc": "Proximity sensor ignore width 2",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_ANG3": {
    "desc": "Proximity sensor ignore angle 3",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_WID3": {
    "desc": "Proximity sensor ignore width 3",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_ANG4": {
    "desc": "Proximity sensor ignore angle 4",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_IGN_WID4": {
    "desc": "Proximity sensor ignore width 4",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX4_MIN": {
    "desc": "Proximity minimum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX4_MAX": {
    "desc": "Proximity maximum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX4_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "PRX4_RECV_ID": {
    "desc": "CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "PRX5_TYPE": {
    "desc": "Proximity type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX5_ORIENT": {
    "desc": "Proximity sensor orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "PRX5_YAW_CORR": {
    "desc": "Proximity sensor yaw correction",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_ANG1": {
    "desc": "Proximity sensor ignore angle 1",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_WID1": {
    "desc": "Proximity sensor ignore width 1",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_ANG2": {
    "desc": "Proximity sensor ignore angle 2",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_WID2": {
    "desc": "Proximity sensor ignore width 2",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_ANG3": {
    "desc": "Proximity sensor ignore angle 3",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_WID3": {
    "desc": "Proximity sensor ignore width 3",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_ANG4": {
    "desc": "Proximity sensor ignore angle 4",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_IGN_WID4": {
    "desc": "Proximity sensor ignore width 4",
    "range": "0 - 127",
    "default": "0",
    "unit": "deg"
  },
  "PRX5_MIN": {
    "desc": "Proximity minimum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX5_MAX": {
    "desc": "Proximity maximum range",
    "range": "0 - 500",
    "default": "0",
    "unit": "m"
  },
  "PRX5_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "PRX5_RECV_ID": {
    "desc": "CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "PSC_D_POS_P": {
    "desc": "Position (vertical) controller P gain",
    "range": "0.50 - 4.00",
    "default": "0",
    "unit": ""
  },
  "PSC_NE_POS_P": {
    "desc": "Position (horizontal) controller P gain",
    "range": "0.50 - 4.00",
    "default": "0",
    "unit": ""
  },
  "PSC_ANGLE_MAX": {
    "desc": "Position Control Angle Max",
    "range": "0 - 45",
    "default": "0",
    "unit": "deg"
  },
  "PSC_JERK_NE": {
    "desc": "Jerk limit for the horizontal kinematic input shaping",
    "range": "1 - 50",
    "default": "0",
    "unit": "m/s/s/s"
  },
  "PSC_JERK_D": {
    "desc": "Jerk limit for the vertical kinematic input shaping",
    "range": "1 - 50",
    "default": "0",
    "unit": "m/s/s/s"
  },
  "PSC_D_VEL_P": {
    "desc": "Velocity (vertical) controller P gain",
    "range": "1.0 - 10.0",
    "default": "0",
    "unit": ""
  },
  "PSC_D_VEL_I": {
    "desc": "Velocity (vertical) controller I gain",
    "range": "0.00 - 10.0",
    "default": "0",
    "unit": ""
  },
  "PSC_D_VEL_IMAX": {
    "desc": "Velocity (vertical) controller I gain maximum",
    "range": "1.000 - 10.000",
    "default": "0",
    "unit": ""
  },
  "PSC_D_VEL_D": {
    "desc": "Velocity (vertical) controller D gain",
    "range": "0.00 - 2.00",
    "default": "0",
    "unit": ""
  },
  "PSC_D_VEL_FF": {
    "desc": "Velocity (vertical) controller Feed Forward gain",
    "range": "0.00 - 2.00",
    "default": "0",
    "unit": ""
  },
  "PSC_D_VEL_FLTE": {
    "desc": "Velocity (vertical) error filter",
    "range": "0 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "PSC_D_VEL_FLTD": {
    "desc": "Velocity (vertical) input filter for D term",
    "range": "0 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "PSC_D_ACC_P": {
    "desc": "Acceleration (vertical) controller P gain",
    "range": "0.010 - 0.250",
    "default": "0",
    "unit": ""
  },
  "PSC_D_ACC_I": {
    "desc": "Acceleration (vertical) controller I gain",
    "range": "0.000 - 0.500",
    "default": "0",
    "unit": ""
  },
  "PSC_D_ACC_IMAX": {
    "desc": "Acceleration (vertical) controller I gain maximum",
    "range": "0.0 - 1.0",
    "default": "0",
    "unit": "d%"
  },
  "PSC_D_ACC_D": {
    "desc": "Acceleration (vertical) controller D gain",
    "range": "0.000 - 0.100",
    "default": "0",
    "unit": ""
  },
  "PSC_D_ACC_FF": {
    "desc": "Acceleration (vertical) controller feed forward",
    "range": "0.000 - 0.100",
    "default": "0",
    "unit": ""
  },
  "PSC_D_ACC_FLTT": {
    "desc": "Acceleration (vertical) controller target frequency in Hz",
    "range": "1 - 50",
    "default": "0",
    "unit": "Hz"
  },
  "PSC_D_ACC_FLTE": {
    "desc": "Acceleration (vertical) controller error frequency in Hz",
    "range": "1 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "PSC_D_ACC_FLTD": {
    "desc": "Acceleration (vertical) controller derivative frequency in Hz",
    "range": "1 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "PSC_D_ACC_SMAX": {
    "desc": "Accel (vertical) slew rate limit",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "PSC_D_ACC_PDMX": {
    "desc": "Acceleration (vertical) controller PD sum maximum",
    "range": "0.00 - 1.00",
    "default": "0",
    "unit": "d%"
  },
  "PSC_D_ACC_D_FF": {
    "desc": "Accel (vertical) Derivative FeedForward Gain",
    "range": "0.000 - 0.050",
    "default": "0",
    "unit": ""
  },
  "PSC_D_ACC_NTF": {
    "desc": "Accel (vertical) Target notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "PSC_D_ACC_NEF": {
    "desc": "Accel (vertical) Error notch filter index",
    "range": "1 - 8",
    "default": "0",
    "unit": ""
  },
  "PSC_NE_VEL_P": {
    "desc": "Velocity (horizontal) P gain",
    "range": "0.10 - 10.00",
    "default": "0",
    "unit": ""
  },
  "PSC_NE_VEL_I": {
    "desc": "Velocity (horizontal) I gain",
    "range": "0.10 - 10.00",
    "default": "0",
    "unit": ""
  },
  "PSC_NE_VEL_D": {
    "desc": "Velocity (horizontal) D gain",
    "range": "0.00 - 1.00",
    "default": "0",
    "unit": ""
  },
  "PSC_NE_VEL_IMAX": {
    "desc": "Velocity (horizontal) integrator maximum",
    "range": "0 - 10",
    "default": "0",
    "unit": "m/s/s"
  },
  "PSC_NE_VEL_FLTE": {
    "desc": "Velocity (horizontal) input filter",
    "range": "0 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "PSC_NE_VEL_FLTD": {
    "desc": "Velocity (horizontal) input filter",
    "range": "0 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "PSC_NE_VEL_FF": {
    "desc": "Velocity (horizontal) feed forward gain",
    "range": "0.10 - 10.00",
    "default": "0",
    "unit": ""
  },
  "RALLY_TOTAL": {
    "desc": "Rally Total",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RALLY_LIMIT_KM": {
    "desc": "Rally Limit",
    "range": "N/A",
    "default": "0",
    "unit": "km"
  },
  "RALLY_INCL_HOME": {
    "desc": "Rally Include Home",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC_OVERRIDE_TIME": {
    "desc": "RC override timeout",
    "range": "0.0 - 120.0",
    "default": "0",
    "unit": "s"
  },
  "RC_OPTIONS": {
    "desc": "RC options [Bitmask: 0:Ignore RC Receiver, 1:Ignore MAVLink Overrides, 2:Ignore Receiver Failsafe bit but allow other RC failsafes if setup, 3:FPort Pad, 4:Log RC input bytes, 5:Arming check throttle for 0 input, 6:Skip the arming check for neutral Roll/Pitch/Yaw sticks, 7:Allow Switch reverse, 8:Use passthrough for CRSF telemetry, 9:Suppress CRSF mode/rate message for ELRS systems,10:Enable multiple receiver support, 11:Use Link Quality for RSSI with CRSF, 12:Annotate CRSF flight mode with * on disarm, 13: Use 420kbaud for ELRS protocol]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC_PROTOCOLS": {
    "desc": "RC protocols enabled [Bitmask: 0:All,1:PPM,2:IBUS,3:SBUS,4:SBUS_NI,5:DSM,6:SUMD,7:SRXL,8:SRXL2,9:CRSF,10:ST24,11:FPORT,12:FPORT2,13:FastSBUS,14:DroneCAN,15:Ghost,16:MAVRadio]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC_FS_TIMEOUT": {
    "desc": "RC Failsafe timeout",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "s"
  },
  "RC1_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC1_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC1_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC1_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC1_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC1_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC2_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC2_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC2_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC2_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC2_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC2_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC3_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC3_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC3_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC3_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC3_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC3_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC4_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC4_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC4_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC4_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC4_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC4_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC5_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC5_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC5_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC5_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC5_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC5_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC6_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC6_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC6_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC6_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC6_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC6_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC7_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC7_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC7_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC7_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC7_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC7_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC8_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC8_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC8_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC8_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC8_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC8_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC9_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC9_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC9_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC9_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC9_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC9_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC10_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC10_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC10_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC10_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC10_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC10_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC11_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC11_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC11_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC11_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC11_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC11_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC12_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC12_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC12_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC12_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC12_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC12_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC13_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC13_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC13_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC13_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC13_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC13_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC14_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC14_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC14_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC14_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC14_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC14_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC15_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC15_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC15_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC15_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC15_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC15_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC16_MIN": {
    "desc": "RC min PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC16_TRIM": {
    "desc": "RC trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC16_MAX": {
    "desc": "RC max PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "RC16_REVERSED": {
    "desc": "RC reversed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RC16_DZ": {
    "desc": "RC dead-zone",
    "range": "0 - 200",
    "default": "0",
    "unit": "PWM"
  },
  "RC16_OPTION": {
    "desc": "RC input option",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RCMAP_ROLL": {
    "desc": "Roll channel",
    "range": "1 - 16",
    "default": "0",
    "unit": ""
  },
  "RCMAP_PITCH": {
    "desc": "Pitch channel",
    "range": "1 - 16",
    "default": "0",
    "unit": ""
  },
  "RCMAP_THROTTLE": {
    "desc": "Throttle channel",
    "range": "1 - 16",
    "default": "0",
    "unit": ""
  },
  "RCMAP_YAW": {
    "desc": "Yaw channel",
    "range": "1 - 16",
    "default": "0",
    "unit": ""
  },
  "RELAY1_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY1_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY1_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY1_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY2_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY2_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY2_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY2_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY3_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY3_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY3_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY3_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY4_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY4_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY4_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY4_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY5_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY5_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY5_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY5_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY6_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY6_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY6_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY6_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY7_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY7_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY7_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY7_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY8_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY8_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY8_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY8_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY9_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY9_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY9_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY9_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY10_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY10_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY10_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY10_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY11_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY11_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY11_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY11_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY12_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY12_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY12_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY12_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY13_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY13_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY13_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY13_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY14_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY14_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY14_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY14_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY15_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY15_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY15_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY15_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY16_FUNCTION": {
    "desc": "Relay function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY16_PIN": {
    "desc": "Relay pin",
    "range": "-1 - 1015",
    "default": "0",
    "unit": ""
  },
  "RELAY16_DEFAULT": {
    "desc": "Relay default state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RELAY16_INVERTED": {
    "desc": "Relay invert output signal",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND1_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND1_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND1_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND1_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND1_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND1_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND1_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND1_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND1_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND1_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND2_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND2_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND2_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND2_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND2_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND2_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND2_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND2_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND2_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND2_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND3_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND3_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND3_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND3_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND3_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND3_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND3_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND3_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND3_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND3_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND4_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND4_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND4_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND4_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND4_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND4_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND4_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND4_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND4_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND4_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND5_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND5_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND5_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND5_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND5_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND5_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND5_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND5_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND5_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND5_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND6_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND6_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND6_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND6_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND6_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND6_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND6_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND6_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND6_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND6_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND7_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND7_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND7_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND7_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND7_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND7_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND7_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND7_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND7_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND7_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND8_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND8_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND8_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND8_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND8_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND8_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND8_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND8_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND8_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND8_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFND9_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFND9_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND9_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFND9_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFND9_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND9_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND9_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND9_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFND9_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFND9_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_TYPE": {
    "desc": "Rangefinder type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_PIN": {
    "desc": "Rangefinder pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_SCALING": {
    "desc": "Rangefinder scaling",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "RNGFNDA_OFFSET": {
    "desc": "rangefinder offset",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "RNGFNDA_FUNCTION": {
    "desc": "Rangefinder function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_MIN": {
    "desc": "Rangefinder minimum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFNDA_MAX": {
    "desc": "Rangefinder maximum distance",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "RNGFNDA_STOP_PIN": {
    "desc": "Rangefinder stop pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_RMETRIC": {
    "desc": "Ratiometric",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_PWRRNG": {
    "desc": "Powersave range",
    "range": "0 - 32767",
    "default": "0",
    "unit": "m"
  },
  "RNGFNDA_GNDCLR": {
    "desc": "Distance from the range finder to the ground",
    "range": "0.05 - 1.5",
    "default": "0",
    "unit": "m"
  },
  "RNGFNDA_ADDR": {
    "desc": "Bus address of sensor",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_POS_X": {
    "desc": "X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFNDA_POS_Y": {
    "desc": "Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFNDA_POS_Z": {
    "desc": "Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "RNGFNDA_ORIENT": {
    "desc": "Rangefinder orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_WSP_MAVG": {
    "desc": "Moving Average Range",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_WSP_MEDF": {
    "desc": "Moving Median Filter",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_WSP_FRQ": {
    "desc": "Frequency",
    "range": "0 - 10000",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_WSP_AVG": {
    "desc": "Multi-pulse averages",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_WSP_THR": {
    "desc": "Sensitivity threshold",
    "range": "-1 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_WSP_BAUD": {
    "desc": "Baud rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_RECV_ID": {
    "desc": "RangeFinder CAN receive ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_SNR_MIN": {
    "desc": "RangeFinder Minimum signal strength",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_GRF_RET": {
    "desc": "LightWare GRF Distance Return Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_GRF_ST": {
    "desc": "LightWare GRF Minimum Return Strength",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "RNGFNDA_GRF_RATE": {
    "desc": "LightWare GRF Update Rate",
    "range": "1 - 50",
    "default": "0",
    "unit": ""
  },
  "RPM1_TYPE": {
    "desc": "RPM type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM1_SCALING": {
    "desc": "RPM scaling",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM1_MAX": {
    "desc": "Maximum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM1_MIN": {
    "desc": "Minimum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM1_MIN_QUAL": {
    "desc": "Minimum Quality",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM1_PIN": {
    "desc": "Input pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RPM1_ESC_MASK": {
    "desc": "Bitmask of ESC telemetry channels to average [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM1_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write RPM to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "RPM1_DC_ID": {
    "desc": "DroneCAN Sensor ID",
    "range": "-1 - 10",
    "default": "0",
    "unit": ""
  },
  "RPM2_TYPE": {
    "desc": "RPM type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM2_SCALING": {
    "desc": "RPM scaling",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM2_MAX": {
    "desc": "Maximum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM2_MIN": {
    "desc": "Minimum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM2_MIN_QUAL": {
    "desc": "Minimum Quality",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM2_PIN": {
    "desc": "Input pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RPM2_ESC_MASK": {
    "desc": "Bitmask of ESC telemetry channels to average [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM2_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write RPM to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "RPM2_DC_ID": {
    "desc": "DroneCAN Sensor ID",
    "range": "-1 - 10",
    "default": "0",
    "unit": ""
  },
  "RPM3_TYPE": {
    "desc": "RPM type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM3_SCALING": {
    "desc": "RPM scaling",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM3_MAX": {
    "desc": "Maximum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM3_MIN": {
    "desc": "Minimum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM3_MIN_QUAL": {
    "desc": "Minimum Quality",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM3_PIN": {
    "desc": "Input pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RPM3_ESC_MASK": {
    "desc": "Bitmask of ESC telemetry channels to average [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM3_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write RPM to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "RPM3_DC_ID": {
    "desc": "DroneCAN Sensor ID",
    "range": "-1 - 10",
    "default": "0",
    "unit": ""
  },
  "RPM4_TYPE": {
    "desc": "RPM type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM4_SCALING": {
    "desc": "RPM scaling",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM4_MAX": {
    "desc": "Maximum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM4_MIN": {
    "desc": "Minimum RPM",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM4_MIN_QUAL": {
    "desc": "Minimum Quality",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM4_PIN": {
    "desc": "Input pin number",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RPM4_ESC_MASK": {
    "desc": "Bitmask of ESC telemetry channels to average [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RPM4_ESC_INDEX": {
    "desc": "ESC Telemetry Index to write RPM to",
    "range": "0 - 10",
    "default": "0",
    "unit": ""
  },
  "RPM4_DC_ID": {
    "desc": "DroneCAN Sensor ID",
    "range": "-1 - 10",
    "default": "0",
    "unit": ""
  },
  "RSSI_TYPE": {
    "desc": "RSSI Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "RSSI_ANA_PIN": {
    "desc": "Receiver RSSI sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "RSSI_PIN_LOW": {
    "desc": "RSSI pin's lowest voltage",
    "range": "0 - 5.0",
    "default": "0",
    "unit": "V"
  },
  "RSSI_PIN_HIGH": {
    "desc": "RSSI pin's highest voltage",
    "range": "0 - 5.0",
    "default": "0",
    "unit": "V"
  },
  "RSSI_CHANNEL": {
    "desc": "Receiver RSSI channel number",
    "range": "0 - 16",
    "default": "0",
    "unit": ""
  },
  "RSSI_CHAN_LOW": {
    "desc": "RSSI PWM low value",
    "range": "0 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "RSSI_CHAN_HIGH": {
    "desc": "Receiver RSSI PWM high value",
    "range": "0 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "SCHED_DEBUG": {
    "desc": "Scheduler debug level",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCHED_LOOP_RATE": {
    "desc": "Scheduling main loop rate",
    "range": "50 - 400",
    "default": "0",
    "unit": "Hz"
  },
  "SCHED_OPTIONS": {
    "desc": "Scheduling options [Bitmask: 0:Enable per-task perf info]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_ENABLE": {
    "desc": "Enable Scripting",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_VM_I_COUNT": {
    "desc": "Scripting Virtual Machine Instruction Count",
    "range": "1000 - 1000000",
    "default": "0",
    "unit": ""
  },
  "SCR_HEAP_SIZE": {
    "desc": "Scripting Heap Size",
    "range": "1024 - 1048576",
    "default": "0",
    "unit": ""
  },
  "SCR_DEBUG_OPTS": {
    "desc": "Scripting Debug Level [Bitmask: 0: No Scripts to run message if all scripts have stopped, 1: Runtime messages for memory usage and execution time, 2: Suppress logging scripts to dataflash, 3: log runtime memory usage and execution time, 4: Disable pre-arm check, 5: Save CRC of current scripts to loaded and running checksum parameters enabling pre-arm, 6: Disable heap expansion on allocation failure]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_USER1": {
    "desc": "Scripting User Parameter1",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_USER2": {
    "desc": "Scripting User Parameter2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_USER3": {
    "desc": "Scripting User Parameter3",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_USER4": {
    "desc": "Scripting User Parameter4",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_USER5": {
    "desc": "Scripting User Parameter5",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_USER6": {
    "desc": "Scripting User Parameter6",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_DIR_DISABLE": {
    "desc": "Directory disable [Bitmask: 0:ROMFS, 1:APM/scripts]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_LD_CHECKSUM": {
    "desc": "Loaded script checksum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_RUN_CHECKSUM": {
    "desc": "Running script checksum",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_THD_PRIORITY": {
    "desc": "Scripting thread priority",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_SDEV_EN": {
    "desc": "Scripting serial device enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_SDEV1_PROTO": {
    "desc": "Serial protocol of scripting serial device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_SDEV2_PROTO": {
    "desc": "Serial protocol of scripting serial device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SCR_SDEV3_PROTO": {
    "desc": "Serial protocol of scripting serial device",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL0_BAUD": {
    "desc": "Serial0 baud rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL0_PROTOCOL": {
    "desc": "Console protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL1_PROTOCOL": {
    "desc": "Telem1 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL1_BAUD": {
    "desc": "Telem1 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL2_PROTOCOL": {
    "desc": "Telemetry 2 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL2_BAUD": {
    "desc": "Telemetry 2 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL3_PROTOCOL": {
    "desc": "Serial 3 (GPS) protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL3_BAUD": {
    "desc": "Serial 3 (GPS) Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL4_PROTOCOL": {
    "desc": "Serial4 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL4_BAUD": {
    "desc": "Serial 4 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL5_PROTOCOL": {
    "desc": "Serial5 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL5_BAUD": {
    "desc": "Serial 5 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL6_PROTOCOL": {
    "desc": "Serial6 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL6_BAUD": {
    "desc": "Serial 6 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL1_OPTIONS": {
    "desc": "Telem1 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL2_OPTIONS": {
    "desc": "Telem2 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL3_OPTIONS": {
    "desc": "Serial3 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL4_OPTIONS": {
    "desc": "Serial4 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL5_OPTIONS": {
    "desc": "Serial5 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL6_OPTIONS": {
    "desc": "Serial6 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL_PASS1": {
    "desc": "Serial passthru first port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL_PASS2": {
    "desc": "Serial passthru second port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL_PASSTIMO": {
    "desc": "Serial passthru timeout",
    "range": "-1 - 120",
    "default": "0",
    "unit": "s"
  },
  "SERIAL7_PROTOCOL": {
    "desc": "Serial7 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL7_BAUD": {
    "desc": "Serial 7 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL7_OPTIONS": {
    "desc": "Serial7 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL8_PROTOCOL": {
    "desc": "Serial8 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL8_BAUD": {
    "desc": "Serial 8 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL8_OPTIONS": {
    "desc": "Serial8 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL9_PROTOCOL": {
    "desc": "Serial9 protocol selection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERIAL9_BAUD": {
    "desc": "Serial 9 Baud Rate",
    "range": "1 - 20000000",
    "default": "0",
    "unit": ""
  },
  "SERIAL9_OPTIONS": {
    "desc": "Serial9 options [Bitmask: 0:InvertRX, 1:InvertTX, 2:HalfDuplex, 3:SwapTXRX, 4: RX_PullDown, 5: RX_PullUp, 6: TX_PullDown, 7: TX_PullUp, 8: RX_NoDMA, 9: TX_NoDMA, 10: Don't forward mavlink to/from (moved to MAVn_OPTIONS >4.7), 11: DisableFIFO, 12: Ignore Streamrate (moved to MAVn_OPTIONS >4.7)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_RATE": {
    "desc": "Servo default output rate",
    "range": "25 - 400",
    "default": "0",
    "unit": "Hz"
  },
  "SERVO_DSHOT_RATE": {
    "desc": "Servo DShot output rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_DSHOT_ESC": {
    "desc": "Servo DShot ESC type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_GPIO_MASK": {
    "desc": "Servo GPIO mask [Bitmask: 0:Servo 1, 1:Servo 2, 2:Servo 3, 3:Servo 4, 4:Servo 5, 5:Servo 6, 6:Servo 7, 7:Servo 8, 8:Servo 9, 9:Servo 10, 10:Servo 11, 11:Servo 12, 12:Servo 13, 13:Servo 14, 14:Servo 15, 15:Servo 16, 16:Servo 17, 17:Servo 18, 18:Servo 19, 19:Servo 20, 20:Servo 21, 21:Servo 22, 22:Servo 23, 23:Servo 24, 24:Servo 25, 25:Servo 26, 26:Servo 27, 27:Servo 28, 28:Servo 29, 29:Servo 30, 30:Servo 31, 31:Servo 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_RC_FS_MSK": {
    "desc": "Servo RC Failsafe Mask [Bitmask: 0:RCIN1Scaled, 1:RCIN2Scaled, 2:RCIN3Scaled, 3:RCIN4Scaled, 4:RCIN5Scaled, 5:RCIN6Scaled, 6:RCIN7Scaled, 7:RCIN8Scaled, 8:RCIN9Scaled, 9:RCIN10Scaled, 10:RCIN11Scaled, 11:SRCIN12Scaled, 12:RCIN13Scaled, 13:RCIN14Scaled, 14:RCIN15Scaled, 15:RCIN16Scaled]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_32_ENABLE": {
    "desc": "Enable outputs 17 to 31",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO1_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO1_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO1_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO1_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO1_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO2_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO2_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO2_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO2_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO2_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO3_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO3_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO3_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO3_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO3_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO4_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO4_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO4_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO4_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO4_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO5_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO5_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO5_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO5_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO5_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO6_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO6_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO6_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO6_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO6_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO7_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO7_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO7_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO7_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO7_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO8_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO8_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO8_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO8_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO8_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO9_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO9_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO9_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO9_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO9_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO10_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO10_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO10_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO10_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO10_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO11_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO11_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO11_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO11_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO11_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO12_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO12_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO12_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO12_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO12_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO13_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO13_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO13_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO13_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO13_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO14_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO14_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO14_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO14_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO14_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO15_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO15_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO15_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO15_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO15_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO16_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO16_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO16_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO16_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO16_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO17_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO17_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO17_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO17_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO17_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO18_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO18_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO18_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO18_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO18_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO19_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO19_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO19_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO19_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO19_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO20_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO20_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO20_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO20_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO20_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO21_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO21_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO21_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO21_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO21_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO22_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO22_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO22_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO22_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO22_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO23_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO23_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO23_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO23_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO23_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO24_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO24_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO24_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO24_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO24_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO25_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO25_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO25_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO25_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO25_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO26_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO26_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO26_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO26_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO26_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO27_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO27_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO27_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO27_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO27_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO28_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO28_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO28_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO28_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO28_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO29_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO29_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO29_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO29_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO29_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO30_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO30_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO30_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO30_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO30_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO31_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO31_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO31_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO31_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO31_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO32_MIN": {
    "desc": "Minimum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO32_MAX": {
    "desc": "Maximum PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO32_TRIM": {
    "desc": "Trim PWM",
    "range": "800 - 2200",
    "default": "0",
    "unit": "PWM"
  },
  "SERVO32_REVERSED": {
    "desc": "Servo reverse",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO32_FUNCTION": {
    "desc": "Servo output function",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_MASK": {
    "desc": "BLHeli Channel Bitmask [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16, 16:Channel 17, 17: Channel 18, 18: Channel 19, 19: Channel 20, 20: Channel 21, 21: Channel 22, 22: Channel 23, 23: Channel 24, 24: Channel 25, 25: Channel 26, 26: Channel 27, 27: Channel 28, 28: Channel 29, 29: Channel 30, 30: Channel 31, 31: Channel 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_AUTO": {
    "desc": "BLHeli pass-thru auto-enable for multicopter motors",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_TEST": {
    "desc": "BLHeli internal interface test",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_TMOUT": {
    "desc": "BLHeli protocol timeout",
    "range": "0 - 300",
    "default": "0",
    "unit": "s"
  },
  "SERVO_BLH_TRATE": {
    "desc": "BLHeli telemetry rate",
    "range": "0 - 500",
    "default": "0",
    "unit": "Hz"
  },
  "SERVO_BLH_DEBUG": {
    "desc": "BLHeli debug level",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_OTYPE": {
    "desc": "BLHeli output type override",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_PORT": {
    "desc": "Control port",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_POLES": {
    "desc": "BLHeli Motor Poles",
    "range": "1 - 127",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_3DMASK": {
    "desc": "BLHeli bitmask of 3D channels [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16, 16:Channel 17, 17: Channel 18, 18: Channel 19, 19: Channel 20, 20: Channel 21, 21: Channel 22, 22: Channel 23, 23: Channel 24, 24: Channel 25, 25: Channel 26, 26: Channel 27, 27: Channel 28, 28: Channel 29, 29: Channel 30, 30: Channel 31, 31: Channel 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_BDMASK": {
    "desc": "BLHeli bitmask of bi-directional dshot channels [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16, 16:Channel 17, 17: Channel 18, 18: Channel 19, 19: Channel 20, 20: Channel 21, 21: Channel 22, 22: Channel 23, 23: Channel 24, 24: Channel 25, 25: Channel 26, 26: Channel 27, 27: Channel 28, 28: Channel 29, 29: Channel 30, 30: Channel 31, 31: Channel 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_BLH_RVMASK": {
    "desc": "BLHeli bitmask of reversed channels [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16, 16:Channel 17, 17: Channel 18, 18: Channel 19, 19: Channel 20, 20: Channel 21, 21: Channel 22, 22: Channel 23, 23: Channel 24, 24: Channel 25, 25: Channel 26, 26: Channel 27, 27: Channel 28, 28: Channel 29, 29: Channel 30, 30: Channel 31, 31: Channel 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_FTW_MASK": {
    "desc": "Servo channel output bitmask [Bitmask: 0:SERVO1,1:SERVO2,2:SERVO3,3:SERVO4,4:SERVO5,5:SERVO6,6:SERVO7,7:SERVO8,8:SERVO9,9:SERVO10,10:SERVO11,11:SERVO12]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_FTW_RVMASK": {
    "desc": "Servo channel reverse rotation bitmask [Bitmask: 0:SERVO1,1:SERVO2,2:SERVO3,3:SERVO4,4:SERVO5,5:SERVO6,6:SERVO7,7:SERVO8,8:SERVO9,9:SERVO10,10:SERVO11,11:SERVO12]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_FTW_POLES": {
    "desc": "Nr. electrical poles",
    "range": "2 - 50",
    "default": "0",
    "unit": ""
  },
  "SERVO_ROB_POSMIN": {
    "desc": "Robotis servo position min",
    "range": "0 - 4095",
    "default": "0",
    "unit": ""
  },
  "SERVO_ROB_POSMAX": {
    "desc": "Robotis servo position max",
    "range": "0 - 4095",
    "default": "0",
    "unit": ""
  },
  "SERVO_SBUS_RATE": {
    "desc": "SBUS default output rate",
    "range": "25 - 250",
    "default": "0",
    "unit": "Hz"
  },
  "SERVO_VOLZ_MASK": {
    "desc": "Channel Bitmask [Bitmask: 0:Channel1,1:Channel2,2:Channel3,3:Channel4,4:Channel5,5:Channel6,6:Channel7,7:Channel8,8:Channel9,9:Channel10,10:Channel11,11:Channel12,12:Channel13,13:Channel14,14:Channel15,15:Channel16,16:Channel17,17:Channel18,18:Channel19,19:Channel20,20:Channel21,21:Channel22,22:Channel23,23:Channel24,24:Channel25,25:Channel26,26:Channel27,28:Channel29,29:Channel30,30:Channel31,31:Channel32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SERVO_VOLZ_RANGE": {
    "desc": "Range of travel",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "SID_AXIS": {
    "desc": "System identification axis",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SID_MAGNITUDE": {
    "desc": "System identification Chirp Magnitude",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SID_F_START_HZ": {
    "desc": "System identification Start Frequency",
    "range": "0.01 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "SID_F_STOP_HZ": {
    "desc": "System identification Stop Frequency",
    "range": "0.01 - 100",
    "default": "0",
    "unit": "Hz"
  },
  "SID_T_FADE_IN": {
    "desc": "System identification Fade in time",
    "range": "0 - 20",
    "default": "0",
    "unit": "s"
  },
  "SID_T_REC": {
    "desc": "System identification Total Sweep length",
    "range": "0 - 255",
    "default": "0",
    "unit": "s"
  },
  "SID_T_FADE_OUT": {
    "desc": "System identification Fade out time",
    "range": "0 - 5",
    "default": "0",
    "unit": "s"
  },
  "SIM_DRIFT_SPEED": {
    "desc": "Gyro drift speed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_DRIFT_TIME": {
    "desc": "Gyro drift time",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ENGINE_MUL": {
    "desc": "Engine failure thrust scaler",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "SIM_WIND_SPD": {
    "desc": "Simulated Wind speed",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_WIND_DIR": {
    "desc": "Direction simulated wind is coming from",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "SIM_WIND_TURB": {
    "desc": "Simulated Wind variation",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_WIND_TC": {
    "desc": "Wind variation time constant",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "SIM_SONAR_ROT": {
    "desc": "Sonar rotation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BATT_VOLTAGE": {
    "desc": "Simulated battery voltage",
    "range": "N/A",
    "default": "0",
    "unit": "V"
  },
  "SIM_BATT_CAP_AH": {
    "desc": "Simulated battery capacity",
    "range": "N/A",
    "default": "0",
    "unit": "Ah"
  },
  "SIM_SONAR_GLITCH": {
    "desc": "Sonar glitch probablility",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "SIM_SONAR_RND": {
    "desc": "Sonar noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_RC_FAIL": {
    "desc": "Simulated RC signal failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_FLOAT_EXCEPT": {
    "desc": "Generate floating point exceptions",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_CAN_SRV_MSK": {
    "desc": "Mask of CAN servos/ESCs [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16, 16: Servo 17, 17: Servo 18, 18: Servo 19, 19: Servo 20, 20: Servo 21, 21: Servo 22, 22: Servo 23, 23: Servo 24, 24: Servo 25, 25: Servo 26, 26: Servo 27, 27: Servo 28, 28: Servo 29, 29: Servo 30, 30: Servo 31, 31: Servo 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_CAN_TYPE1": {
    "desc": "transport type for first CAN interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_CAN_TYPE2": {
    "desc": "transport type for second CAN interface",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SONAR_SCALE": {
    "desc": "Sonar conversion scale",
    "range": "N/A",
    "default": "0",
    "unit": "m/V"
  },
  "SIM_FLOW_ENABLE": {
    "desc": "Opflow Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_TERRAIN": {
    "desc": "Terrain Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_FLOW_RATE": {
    "desc": "Opflow Rate",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_FLOW_DELAY": {
    "desc": "Opflow Delay",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_ADSB_COUNT": {
    "desc": "Number of ADSB aircrafts",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ADSB_RADIUS": {
    "desc": "ADSB radius stddev of another aircraft",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_ADSB_ALT": {
    "desc": "ADSB altitude of another aircraft",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_PIN_MASK": {
    "desc": "GPIO emulation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ADSB_TX": {
    "desc": "ADSB transmit enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SPEEDUP": {
    "desc": "Sim Speedup",
    "range": "1 - 10",
    "default": "0",
    "unit": ""
  },
  "SIM_IMU_POS_X": {
    "desc": "IMU Offsets",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_IMU_POS_Y": {
    "desc": "IMU Offsets",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_IMU_POS_Z": {
    "desc": "IMU Offsets",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SONAR_POS_X": {
    "desc": "Sonar Offsets",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SONAR_POS_Y": {
    "desc": "Sonar Offsets",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SONAR_POS_Z": {
    "desc": "Sonar Offsets",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_FLOW_POS_X": {
    "desc": "Opflow Pos",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_FLOW_POS_Y": {
    "desc": "Opflow Pos",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_FLOW_POS_Z": {
    "desc": "Opflow Pos",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_ENGINE_FAIL": {
    "desc": "Engine Fail Mask [Bitmask: 0: Servo 1, 1: Servo 2, 2: Servo 3, 3: Servo 4, 4: Servo 5, 5: Servo 6, 6: Servo 7, 7: Servo 8, 8: Servo 9, 9: Servo 10, 10: Servo 11, 11: Servo 12, 12: Servo 13, 13: Servo 14, 14: Servo 15, 15: Servo 16, 16: Servo 17, 17: Servo 18, 18: Servo 19, 19: Servo 20, 20: Servo 21, 21: Servo 22, 22: Servo 23, 23: Servo 24, 24: Servo 25, 25: Servo 26, 26: Servo 27, 27: Servo 28, 28: Servo 29, 29: Servo 30, 30: Servo 31, 31: Servo 32]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_TEMP_START": {
    "desc": "Start temperature",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "SIM_TEMP_BRD_OFF": {
    "desc": "Baro temperature offset",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "SIM_TEMP_TCONST": {
    "desc": "Warmup time constant",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "SIM_TEMP_BFACTOR": {
    "desc": "Baro temperature factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_WIND_DIR_Z": {
    "desc": "Simulated wind vertical direction",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "SIM_WIND_T": {
    "desc": "Wind Profile Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_WIND_T_ALT": {
    "desc": "Full Wind Altitude",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_WIND_T_COEF": {
    "desc": "Linear Wind Curve Coeff",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_RC_CHANCOUNT": {
    "desc": "RC channel count",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_WOW_PIN": {
    "desc": "Weight on Wheels Pin",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VIB_FREQ_X": {
    "desc": "Vibration frequency",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_VIB_FREQ_Y": {
    "desc": "Vibration frequency",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_VIB_FREQ_Z": {
    "desc": "Vibration frequency",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_BAUDLIMIT_EN": {
    "desc": "Telemetry bandwidth limitting",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SHOVE_X": {
    "desc": "Acceleration of shove x",
    "range": "N/A",
    "default": "0",
    "unit": "m/s/s"
  },
  "SIM_SHOVE_Y": {
    "desc": "Acceleration of shove y",
    "range": "N/A",
    "default": "0",
    "unit": "m/s/s"
  },
  "SIM_SHOVE_Z": {
    "desc": "Acceleration of shove z",
    "range": "N/A",
    "default": "0",
    "unit": "m/s/s"
  },
  "SIM_SHOVE_TIME": {
    "desc": "Time length for shove",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_FLOW_RND": {
    "desc": "Opflow noise",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_TWIST_X": {
    "desc": "Twist x",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s/s"
  },
  "SIM_TWIST_Y": {
    "desc": "Twist y",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s/s"
  },
  "SIM_TWIST_Z": {
    "desc": "Twist z",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s/s"
  },
  "SIM_TWIST_TIME": {
    "desc": "Twist time",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_GND_BEHAV": {
    "desc": "Ground behavior",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMU_ORIENT": {
    "desc": "IMU orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_WAVE_ENABLE": {
    "desc": "Wave enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_WAVE_LENGTH": {
    "desc": "Wave length",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_WAVE_AMP": {
    "desc": "Wave amplitude",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_WAVE_DIR": {
    "desc": "Wave direction",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "SIM_WAVE_SPEED": {
    "desc": "Wave speed",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_TIDE_DIR": {
    "desc": "Tide direction",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "SIM_TIDE_SPEED": {
    "desc": "Tide speed",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_OPOS_LAT": {
    "desc": "Original Position (Latitude)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_OPOS_LNG": {
    "desc": "Original Position (Longitude)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_OPOS_ALT": {
    "desc": "Original Position (Altitude)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_OPOS_HDG": {
    "desc": "Original Position (Heading)",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_LOOP_DELAY": {
    "desc": "Extra delay per main loop",
    "range": "N/A",
    "default": "0",
    "unit": "us"
  },
  "SIM_EFI_TYPE": {
    "desc": "Type of Electronic Fuel Injection",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VIB_MOT_HMNC": {
    "desc": "Motor harmonics",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VIB_MOT_MASK": {
    "desc": "Motor mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VIB_MOT_MAX": {
    "desc": "Max motor vibration frequency",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_INS_THR_MIN": {
    "desc": "Minimum throttle INS noise",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VIB_MOT_MULT": {
    "desc": "Vibration motor scale",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ODOM_ENABLE": {
    "desc": "Odometry enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_LED_LAYOUT": {
    "desc": "LED layout",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_THML_SCENARI": {
    "desc": "Thermal scenarios",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_RATE_HZ": {
    "desc": "Loop rate",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_IMU_COUNT": {
    "desc": "IMU count",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_COUNT": {
    "desc": "Baro count",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "SIM_TIME_JITTER": {
    "desc": "Loop time jitter",
    "range": "N/A",
    "default": "0",
    "unit": "us"
  },
  "SIM_ESC_TELEM": {
    "desc": "Simulated ESC Telemetry",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ESC_ARM_RPM": {
    "desc": "ESC RPM when armed",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_UART_LOSS": {
    "desc": "UART byte loss percentage",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "SIM_ADSB_TYPES": {
    "desc": "Simulated ADSB Type mask [Bitmask: 0:MAVLink,3:SageTechMXS]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_OSD_COLUMNS": {
    "desc": "Simulated OSD number of text columns",
    "range": "10 - 100",
    "default": "0",
    "unit": ""
  },
  "SIM_OSD_ROWS": {
    "desc": "Simulated OSD number of text rows",
    "range": "10 - 100",
    "default": "0",
    "unit": ""
  },
  "SIM_INIT_LAT_OFS": {
    "desc": "Initial Latitude Offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_INIT_LON_OFS": {
    "desc": "Initial Longitude Offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_INIT_ALT_OFS": {
    "desc": "Initial Altitude Offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS_LOG_NUM": {
    "desc": "GPS Log Number",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG_RND": {
    "desc": "Mag motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG_MOT_X": {
    "desc": "Motor magnetic interference",
    "range": "N/A",
    "default": "0",
    "unit": "mGauss/A"
  },
  "SIM_MAG_MOT_Y": {
    "desc": "Motor magnetic interference",
    "range": "N/A",
    "default": "0",
    "unit": "mGauss/A"
  },
  "SIM_MAG_MOT_Z": {
    "desc": "Motor magnetic interference",
    "range": "N/A",
    "default": "0",
    "unit": "mGauss/A"
  },
  "SIM_MAG_DELAY": {
    "desc": "Mag measurement delay",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_MAG1_OFS_X": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_OFS_Y": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_OFS_Z": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG_ALY_X": {
    "desc": "NED anomaly vector at ground level",
    "range": "N/A",
    "default": "0",
    "unit": "mGauss"
  },
  "SIM_MAG_ALY_Y": {
    "desc": "NED anomaly vector at ground level",
    "range": "N/A",
    "default": "0",
    "unit": "mGauss"
  },
  "SIM_MAG_ALY_Z": {
    "desc": "NED anomaly vector at ground level",
    "range": "N/A",
    "default": "0",
    "unit": "mGauss"
  },
  "SIM_MAG_ALY_HGT": {
    "desc": "Magnetic anomaly height",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_MAG1_DIA_X": {
    "desc": "Magnetometer soft-iron diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_DIA_Y": {
    "desc": "Magnetometer soft-iron diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_DIA_Z": {
    "desc": "Magnetometer soft-iron diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_ODI_X": {
    "desc": "Magnetometer soft-iron off-diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_ODI_Y": {
    "desc": "Magnetometer soft-iron off-diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_ODI_Z": {
    "desc": "Magnetometer soft-iron off-diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_ORIENT": {
    "desc": "MAG1 Orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_SCALING": {
    "desc": "MAG1 Scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_DEVID": {
    "desc": "MAG1 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_DEVID": {
    "desc": "MAG2 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_DEVID": {
    "desc": "MAG3 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG4_DEVID": {
    "desc": "MAG2 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG5_DEVID": {
    "desc": "MAG5 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG6_DEVID": {
    "desc": "MAG6 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG7_DEVID": {
    "desc": "MAG7 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG8_DEVID": {
    "desc": "MAG8 Device ID",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG1_FAIL": {
    "desc": "MAG1 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_OFS_X": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_OFS_Y": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_OFS_Z": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_DIA_X": {
    "desc": "Magnetometer soft-iron diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_DIA_Y": {
    "desc": "Magnetometer soft-iron diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_DIA_Z": {
    "desc": "Magnetometer soft-iron diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_ODI_X": {
    "desc": "Magnetometer soft-iron off-diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_ODI_Y": {
    "desc": "Magnetometer soft-iron off-diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_ODI_Z": {
    "desc": "Magnetometer soft-iron off-diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_ORIENT": {
    "desc": "MAG2 Orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_FAIL": {
    "desc": "MAG2 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG2_SCALING": {
    "desc": "MAG2 Scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_OFS_X": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_OFS_Y": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_OFS_Z": {
    "desc": "Magnetometer offset applied to SITL",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_DIA_X": {
    "desc": "Magnetometer soft-iron diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_DIA_Y": {
    "desc": "Magnetometer soft-iron diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_DIA_Z": {
    "desc": "Magnetometer soft-iron diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_ODI_X": {
    "desc": "Magnetometer soft-iron off-diagonal X component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_ODI_Y": {
    "desc": "Magnetometer soft-iron off-diagonal Y component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_ODI_Z": {
    "desc": "Magnetometer soft-iron off-diagonal Z component",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_FAIL": {
    "desc": "MAG3 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_SCALING": {
    "desc": "MAG3 Scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG3_ORIENT": {
    "desc": "MAG3 Orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_MAG_SAVE_IDS": {
    "desc": "Save MAG devids on startup",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT_START": {
    "desc": "IMU temperature start",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT_END": {
    "desc": "IMU temperature end",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT_TCONST": {
    "desc": "IMU temperature time constant",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT_FIXED": {
    "desc": "IMU fixed temperature",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC1_BIAS_X": {
    "desc": "Accel 1 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC1_BIAS_Y": {
    "desc": "Accel 1 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC1_BIAS_Z": {
    "desc": "Accel 1 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC2_BIAS_X": {
    "desc": "Accel 2 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC2_BIAS_Y": {
    "desc": "Accel 2 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC2_BIAS_Z": {
    "desc": "Accel 2 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC3_BIAS_X": {
    "desc": "Accel 3 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC3_BIAS_Y": {
    "desc": "Accel 3 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC3_BIAS_Z": {
    "desc": "Accel 3 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR1_RND": {
    "desc": "Gyro 1 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR2_RND": {
    "desc": "Gyro 2 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR3_RND": {
    "desc": "Gyro 3 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC1_RND": {
    "desc": "Accel 1 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC2_RND": {
    "desc": "Accel 2 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC3_RND": {
    "desc": "Accel 3 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR1_SCALE_X": {
    "desc": "Gyro 1 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR1_SCALE_Y": {
    "desc": "Gyro 1 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR1_SCALE_Z": {
    "desc": "Gyro 1 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR2_SCALE_X": {
    "desc": "Gyro 2 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR2_SCALE_Y": {
    "desc": "Gyro 2 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR2_SCALE_Z": {
    "desc": "Gyro 2 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR3_SCALE_X": {
    "desc": "Gyro 3 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR3_SCALE_Y": {
    "desc": "Gyro 3 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR3_SCALE_Z": {
    "desc": "Gyro 3 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACCEL1_FAIL": {
    "desc": "ACCEL1 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACCEL2_FAIL": {
    "desc": "ACCEL2 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACCEL3_FAIL": {
    "desc": "ACCEL3 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR_FAIL_MSK": {
    "desc": "Gyro Failure Mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC_FAIL_MSK": {
    "desc": "Accelerometer Failure Mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC1_SCAL_X": {
    "desc": "Accel 1 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC1_SCAL_Y": {
    "desc": "Accel 1 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC1_SCAL_Z": {
    "desc": "Accel 1 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC2_SCAL_X": {
    "desc": "Accel 2 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC2_SCAL_Y": {
    "desc": "Accel 2 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC2_SCAL_Z": {
    "desc": "Accel 2 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC3_SCAL_X": {
    "desc": "Accel 3 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC3_SCAL_Y": {
    "desc": "Accel 3 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC3_SCAL_Z": {
    "desc": "Accel 3 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC_TRIM_X": {
    "desc": "Accelerometer trim",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC_TRIM_Y": {
    "desc": "Accelerometer trim",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC_TRIM_Z": {
    "desc": "Accelerometer trim",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_JSON_MASTER": {
    "desc": "JSON master instance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_OH_MASK": {
    "desc": "SIM-on_hardware Output Enable Mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR_FILE_RW": {
    "desc": "Gyro data to/from files",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC_FILE_RW": {
    "desc": "Accelerometer data to/from files",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR1_BIAS_X": {
    "desc": "First Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR1_BIAS_Y": {
    "desc": "First Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR1_BIAS_Z": {
    "desc": "First Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR2_BIAS_X": {
    "desc": "Second Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR2_BIAS_Y": {
    "desc": "Second Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR2_BIAS_Z": {
    "desc": "Second Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR3_BIAS_X": {
    "desc": "Third Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR3_BIAS_Y": {
    "desc": "Third Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR3_BIAS_Z": {
    "desc": "Third Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_ACC4_SCAL_X": {
    "desc": "Accel 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC4_SCAL_Y": {
    "desc": "Accel 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC4_SCAL_Z": {
    "desc": "Accel 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACCEL4_FAIL": {
    "desc": "ACCEL4 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR4_SCALE_X": {
    "desc": "Gyro 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR4_SCALE_Y": {
    "desc": "Gyro 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR4_SCALE_Z": {
    "desc": "Gyro 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC4_RND": {
    "desc": "Accel 4 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR4_RND": {
    "desc": "Gyro 4 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC4_BIAS_X": {
    "desc": "Accel 4 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC4_BIAS_Y": {
    "desc": "Accel 4 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC4_BIAS_Z": {
    "desc": "Accel 4 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR4_BIAS_X": {
    "desc": "Fourth Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR4_BIAS_Y": {
    "desc": "Fourth Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR4_BIAS_Z": {
    "desc": "Fourth Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_ACC5_SCAL_X": {
    "desc": "Accel 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC5_SCAL_Y": {
    "desc": "Accel 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC5_SCAL_Z": {
    "desc": "Accel 4 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACCEL5_FAIL": {
    "desc": "ACCEL5 Failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR5_SCALE_X": {
    "desc": "Gyro 5 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR5_SCALE_Y": {
    "desc": "Gyro 5 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR5_SCALE_Z": {
    "desc": "Gyro 5 scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC5_RND": {
    "desc": "Accel 5 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR5_RND": {
    "desc": "Gyro 5 motor noise factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC5_BIAS_X": {
    "desc": "Accel 5 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC5_BIAS_Y": {
    "desc": "Accel 5 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ACC5_BIAS_Z": {
    "desc": "Accel 5 bias",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GYR5_BIAS_X": {
    "desc": "Fifth Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR5_BIAS_Y": {
    "desc": "Fifth Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_GYR5_BIAS_Z": {
    "desc": "Fifth Gyro bias",
    "range": "N/A",
    "default": "0",
    "unit": "rad/s"
  },
  "SIM_OH_RELAY_MSK": {
    "desc": "SIM-on_hardware Relay Enable Mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_CLAMP_CH": {
    "desc": "Simulated Clamp Channel",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ENABLE": {
    "desc": "Enable simulated temperature disturbance for sensor data",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC1_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC1_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC1_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC2_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC2_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC2_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC3_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC3_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_ACC3_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR1_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR1_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR1_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR2_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR2_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR2_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR3_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR3_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_GYR3_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT1_TMAX": {
    "desc": "Simulated temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT1_TMIN": {
    "desc": "Simulated temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT2_ENABLE": {
    "desc": "Enable simulated temperature disturbance for sensor data",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC1_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC1_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC1_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC2_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC2_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC2_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC3_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC3_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_ACC3_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR1_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR1_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR1_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR2_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR2_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR2_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR3_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR3_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_GYR3_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT2_TMAX": {
    "desc": "Simulated temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT2_TMIN": {
    "desc": "Simulated temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT3_ENABLE": {
    "desc": "Enable simulated temperature disturbance for sensor data",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC1_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC1_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC1_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC2_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC2_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC2_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC3_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC3_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_ACC3_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR1_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR1_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR1_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR2_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR2_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR2_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR3_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR3_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_GYR3_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT3_TMAX": {
    "desc": "Simulated temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT3_TMIN": {
    "desc": "Simulated temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT4_ENABLE": {
    "desc": "Enable simulated temperature disturbance for sensor data",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC1_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC1_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC1_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC2_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC2_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC2_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC3_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC3_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_ACC3_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR1_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR1_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR1_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR2_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR2_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR2_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR3_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR3_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_GYR3_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT4_TMAX": {
    "desc": "Simulated temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT4_TMIN": {
    "desc": "Simulated temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT5_ENABLE": {
    "desc": "Enable simulated temperature disturbance for sensor data",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC1_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC1_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC1_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC2_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC2_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC2_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC3_X": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC3_Y": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_ACC3_Z": {
    "desc": "Applied simulated acceleration to accelerometer",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR1_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR1_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR1_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR2_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR2_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR2_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR3_X": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR3_Y": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_GYR3_Z": {
    "desc": "Applied simulated angular rate to gyroscope",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IMUT5_TMAX": {
    "desc": "Simulated temperature calibration max",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_IMUT5_TMIN": {
    "desc": "Simulated temperature calibration min",
    "range": "-70 - 80",
    "default": "0",
    "unit": "degC"
  },
  "SIM_AIS_COUNT": {
    "desc": "Number of AIS vessels",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_AIS_RADIUS": {
    "desc": "AIS radius stddev of vessels",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_ARSPD2_RND": {
    "desc": "Airspeed sensor noise",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "SIM_ARSPD2_OFS": {
    "desc": "Airspeed sensor offset",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_ARSPD2_FAIL": {
    "desc": "Airspeed sensor failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ARSPD2_FAILP": {
    "desc": "Airspeed sensor failure pressure",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "SIM_ARSPD2_PITOT": {
    "desc": "Airspeed pitot tube failure pressure",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "SIM_ARSPD2_SIGN": {
    "desc": "Airspeed signflip",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ARSPD2_RATIO": {
    "desc": "Airspeed ratios",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ARSPD_RND": {
    "desc": "Airspeed sensor noise",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "SIM_ARSPD_OFS": {
    "desc": "Airspeed sensor offset",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_ARSPD_FAIL": {
    "desc": "Airspeed sensor failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ARSPD_FAILP": {
    "desc": "Airspeed sensor failure pressure",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "SIM_ARSPD_PITOT": {
    "desc": "Airspeed pitot tube failure pressure",
    "range": "N/A",
    "default": "0",
    "unit": "Pa"
  },
  "SIM_ARSPD_SIGN": {
    "desc": "Airspeed signflip",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_ARSPD_RATIO": {
    "desc": "Airspeed ratios",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_RND": {
    "desc": "Barometer noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_BAR2_DRIFT": {
    "desc": "Barometer altitude drift",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_BAR2_DISABLE": {
    "desc": "Barometer disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_GLITCH": {
    "desc": "Barometer glitch",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_BAR2_FREEZE": {
    "desc": "Barometer freeze",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_DELAY": {
    "desc": "Barometer delay",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_BAR2_WCF_FWD": {
    "desc": "Wind coefficient forward",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_WCF_BAK": {
    "desc": "Wind coefficient backward",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_WCF_RGT": {
    "desc": "Wind coefficient right",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_WCF_LFT": {
    "desc": "Wind coefficient left",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_WCF_UP": {
    "desc": "Wind coefficient up",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR2_WCF_DN": {
    "desc": "Wind coefficient down",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_RND": {
    "desc": "Barometer noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_BAR3_DRIFT": {
    "desc": "Barometer altitude drift",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_BAR3_DISABLE": {
    "desc": "Barometer disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_GLITCH": {
    "desc": "Barometer glitch",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_BAR3_FREEZE": {
    "desc": "Barometer freeze",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_DELAY": {
    "desc": "Barometer delay",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_BAR3_WCF_FWD": {
    "desc": "Wind coefficient forward",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_WCF_BAK": {
    "desc": "Wind coefficient backward",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_WCF_RGT": {
    "desc": "Wind coefficient right",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_WCF_LFT": {
    "desc": "Wind coefficient left",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_WCF_UP": {
    "desc": "Wind coefficient up",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BAR3_WCF_DN": {
    "desc": "Wind coefficient down",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_RND": {
    "desc": "Barometer noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_BARO_DRIFT": {
    "desc": "Barometer altitude drift",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_BARO_DISABLE": {
    "desc": "Barometer disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_GLITCH": {
    "desc": "Barometer glitch",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_BARO_FREEZE": {
    "desc": "Barometer freeze",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_DELAY": {
    "desc": "Barometer delay",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_BARO_WCF_FWD": {
    "desc": "Wind coefficient forward",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_WCF_BAK": {
    "desc": "Wind coefficient backward",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_WCF_RGT": {
    "desc": "Wind coefficient right",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_WCF_LFT": {
    "desc": "Wind coefficient left",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_WCF_UP": {
    "desc": "Wind coefficient up",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BARO_WCF_DN": {
    "desc": "Wind coefficient down",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BZ_ENABLE": {
    "desc": "Buzzer enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_BZ_PIN": {
    "desc": "buzzer pin",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "SIM_FTOWESC_ENA": {
    "desc": "FETtec OneWire ESC simulator enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_FTOWESC_POW": {
    "desc": "Power off FETtec ESC mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GLD_BLN_BRST": {
    "desc": "balloon burst height",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GLD_BLN_RATE": {
    "desc": "balloon climb rate",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_GPS1_ENABLE": {
    "desc": "GPS enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_LAG_MS": {
    "desc": "GPS Lag",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_GPS1_TYPE": {
    "desc": "GPS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_BYTELOS": {
    "desc": "GPS Byteloss",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "SIM_GPS1_NUMSATS": {
    "desc": "GPS Num Satellites",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_GLTCH_X": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_GLTCH_Y": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_GLTCH_Z": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_HZ": {
    "desc": "GPS Hz",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_GPS1_DRFTALT": {
    "desc": "GPS Altitude Drift",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS1_POS_X": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS1_POS_Y": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS1_POS_Z": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS1_NOISE": {
    "desc": "GPS Noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS1_LCKTIME": {
    "desc": "GPS Lock Time",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "SIM_GPS1_ALT_OFS": {
    "desc": "GPS Altitude Offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS1_HDG": {
    "desc": "GPS Heading",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_ACC": {
    "desc": "GPS Accuracy",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_VERR_X": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_VERR_Y": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_VERR_Z": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_JAM": {
    "desc": "GPS jamming enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_HDG_OFS": {
    "desc": "GPS heading offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS1_OPTIONS": {
    "desc": "GPS Options [Bitmask: 0:UBlox GPS is F9P]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_ENABLE": {
    "desc": "GPS enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_LAG_MS": {
    "desc": "GPS Lag",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_GPS2_TYPE": {
    "desc": "GPS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_BYTELOS": {
    "desc": "GPS Byteloss",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "SIM_GPS2_NUMSATS": {
    "desc": "GPS Num Satellites",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_GLTCH_X": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_GLTCH_Y": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_GLTCH_Z": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_HZ": {
    "desc": "GPS Hz",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_GPS2_DRFTALT": {
    "desc": "GPS Altitude Drift",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS2_POS_X": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS2_POS_Y": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS2_POS_Z": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS2_NOISE": {
    "desc": "GPS Noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS2_LCKTIME": {
    "desc": "GPS Lock Time",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "SIM_GPS2_ALT_OFS": {
    "desc": "GPS Altitude Offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS2_HDG": {
    "desc": "GPS Heading",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_ACC": {
    "desc": "GPS Accuracy",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_VERR_X": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_VERR_Y": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_VERR_Z": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_JAM": {
    "desc": "GPS jamming enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_HDG_OFS": {
    "desc": "GPS heading offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS2_OPTIONS": {
    "desc": "GPS Options [Bitmask: 0:UBlox GPS is F9P]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_ENABLE": {
    "desc": "GPS enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_LAG_MS": {
    "desc": "GPS Lag",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_GPS3_TYPE": {
    "desc": "GPS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_BYTELOS": {
    "desc": "GPS Byteloss",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "SIM_GPS3_NUMSATS": {
    "desc": "GPS Num Satellites",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_GLTCH_X": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_GLTCH_Y": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_GLTCH_Z": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_HZ": {
    "desc": "GPS Hz",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_GPS3_DRFTALT": {
    "desc": "GPS Altitude Drift",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS3_POS_X": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS3_POS_Y": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS3_POS_Z": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS3_NOISE": {
    "desc": "GPS Noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS3_LCKTIME": {
    "desc": "GPS Lock Time",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "SIM_GPS3_ALT_OFS": {
    "desc": "GPS Altitude Offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS3_HDG": {
    "desc": "GPS Heading",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_ACC": {
    "desc": "GPS Accuracy",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_VERR_X": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_VERR_Y": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_VERR_Z": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_JAM": {
    "desc": "GPS jamming enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_HDG_OFS": {
    "desc": "GPS heading offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS3_OPTIONS": {
    "desc": "GPS Options [Bitmask: 0:UBlox GPS is F9P]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_ENABLE": {
    "desc": "GPS enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_LAG_MS": {
    "desc": "GPS Lag",
    "range": "N/A",
    "default": "0",
    "unit": "ms"
  },
  "SIM_GPS4_TYPE": {
    "desc": "GPS type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_BYTELOS": {
    "desc": "GPS Byteloss",
    "range": "N/A",
    "default": "0",
    "unit": "%"
  },
  "SIM_GPS4_NUMSATS": {
    "desc": "GPS Num Satellites",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_GLTCH_X": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_GLTCH_Y": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_GLTCH_Z": {
    "desc": "GPS Glitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_HZ": {
    "desc": "GPS Hz",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_GPS4_DRFTALT": {
    "desc": "GPS Altitude Drift",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS4_POS_X": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS4_POS_Y": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS4_POS_Z": {
    "desc": "GPS Position",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS4_NOISE": {
    "desc": "GPS Noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS4_LCKTIME": {
    "desc": "GPS Lock Time",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "SIM_GPS4_ALT_OFS": {
    "desc": "GPS Altitude Offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_GPS4_HDG": {
    "desc": "GPS Heading",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_ACC": {
    "desc": "GPS Accuracy",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_VERR_X": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_VERR_Y": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_VERR_Z": {
    "desc": "GPS Velocity Error",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_JAM": {
    "desc": "GPS jamming enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_HDG_OFS": {
    "desc": "GPS heading offset",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GPS4_OPTIONS": {
    "desc": "GPS Options [Bitmask: 0:UBlox GPS is F9P]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GRPE_ENABLE": {
    "desc": "Gripper servo Sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GRPE_PIN": {
    "desc": "Gripper emp pin",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "SIM_GRPS_ENABLE": {
    "desc": "Gripper servo Sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_GRPS_PIN": {
    "desc": "Gripper servo pin",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "SIM_GRPS_GRAB": {
    "desc": "Gripper Grab PWM",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "SIM_GRPS_RELEASE": {
    "desc": "Gripper Release PWM",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "PWM"
  },
  "SIM_GRPS_REVERSE": {
    "desc": "Gripper close direction",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IE24_ENABLE": {
    "desc": "IntelligentEnergy 2.4kWh FuelCell sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IE24_STATE": {
    "desc": "Explicitly set state",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_IE24_ERROR": {
    "desc": "Explicitly set error code",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_PARA_ENABLE": {
    "desc": "Parachute Sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_PARA_PIN": {
    "desc": "Parachute pin",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "SIM_PLD_ENABLE": {
    "desc": "Preland device Sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_PLD_LAT": {
    "desc": "Precland device center's latitude",
    "range": "-90 - 90",
    "default": "0",
    "unit": "deg"
  },
  "SIM_PLD_LON": {
    "desc": "Precland device center's longitude",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "SIM_PLD_HEIGHT": {
    "desc": "Precland device center's height SITL origin",
    "range": "0 - 10000",
    "default": "0",
    "unit": "m"
  },
  "SIM_PLD_YAW": {
    "desc": "Precland device systems rotation from north",
    "range": "-180 - +180",
    "default": "0",
    "unit": "deg"
  },
  "SIM_PLD_RATE": {
    "desc": "Precland device update rate",
    "range": "0 - 200",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_PLD_TYPE": {
    "desc": "Precland device radiance type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_PLD_ALT_LMT": {
    "desc": "Precland device alt range",
    "range": "0 - 100",
    "default": "0",
    "unit": "m"
  },
  "SIM_PLD_DIST_LMT": {
    "desc": "Precland device lateral range",
    "range": "5 - 100",
    "default": "0",
    "unit": "m"
  },
  "SIM_PLD_ORIENT": {
    "desc": "Precland device orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_PLD_OPTIONS": {
    "desc": "SIM_Precland extra options [Bitmask: 0: Enable target distance]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_PLD_SHIP": {
    "desc": "SIM_Precland follow ship",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_RFL_OPTS": {
    "desc": "FlightAxis options [Bitmask: 0: Reset position on startup, 1: Swap first 4 and last 4 servos (for quadplane testing), 2: Demix heli servos and send roll/pitch/collective/yaw, 3: Don't print frame rate stats, 4: Don't log Dt stats]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_RFL_SAMPLEHZ": {
    "desc": "FlightAxis IMU synthetic sample rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_RICH_ENABLE": {
    "desc": "RichenPower Generator sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_RICH_CTRL": {
    "desc": "Pin RichenPower is connectred to",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "SIM_SB_MASS": {
    "desc": "mass",
    "range": "N/A",
    "default": "0",
    "unit": "kg"
  },
  "SIM_SB_HMASS": {
    "desc": "helium mass",
    "range": "N/A",
    "default": "0",
    "unit": "kg"
  },
  "SIM_SB_ARM_LEN": {
    "desc": "arm length",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SB_MOT_THST": {
    "desc": "motor thrust",
    "range": "N/A",
    "default": "0",
    "unit": "N"
  },
  "SIM_SB_DRAG_FWD": {
    "desc": "drag in forward direction",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SB_DRAG_SIDE": {
    "desc": "drag in sidewards direction",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SB_DRAG_UP": {
    "desc": "drag in upward direction",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SB_MOI_YAW": {
    "desc": "moment of inertia in yaw",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SB_MOI_ROLL": {
    "desc": "moment of inertia in roll",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SB_MOI_PITCH": {
    "desc": "moment of inertia in pitch",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SB_ALT_TARG": {
    "desc": "altitude target",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SB_CLMB_RT": {
    "desc": "target climb rate",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_SB_YAW_RT": {
    "desc": "yaw rate",
    "range": "N/A",
    "default": "0",
    "unit": "deg/s"
  },
  "SIM_SB_MOT_ANG": {
    "desc": "motor angle",
    "range": "N/A",
    "default": "0",
    "unit": "deg"
  },
  "SIM_SB_COL": {
    "desc": "center of lift",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SB_WVANE": {
    "desc": "weathervaning offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SB_FLR": {
    "desc": "free lift rate",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SERVO_SPEED": {
    "desc": "servo speed",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "SIM_SERVO_DELAY": {
    "desc": "servo delay",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "SIM_SERVO_FILTER": {
    "desc": "servo filter",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_SHIP_ENABLE": {
    "desc": "Ship landing Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SHIP_SPEED": {
    "desc": "Ship Speed",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_SHIP_PSIZE": {
    "desc": "Path Size",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SHIP_SYSID": {
    "desc": "System ID",
    "range": "1 - 255",
    "default": "0",
    "unit": ""
  },
  "SIM_SHIP_DSIZE": {
    "desc": "Deck Size",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SHIP_OFS_X": {
    "desc": "Ship landing pad offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SHIP_OFS_Y": {
    "desc": "Ship landing pad offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SHIP_OFS_Z": {
    "desc": "Ship landing pad offset",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_SLUP_ENABLE": {
    "desc": "Slung Payload Sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SLUP_WEIGHT": {
    "desc": "Slung Payload weight",
    "range": "0 - 15",
    "default": "0",
    "unit": "kg"
  },
  "SIM_SLUP_LINELEN": {
    "desc": "Slung Payload line length",
    "range": "0 - 100",
    "default": "0",
    "unit": "m"
  },
  "SIM_SLUP_DRAG": {
    "desc": "Slung Payload drag coefficient",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "SIM_SLUP_SYSID": {
    "desc": "Slung Payload MAVLink system ID",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "SIM_SPR_ENABLE": {
    "desc": "Sprayer Sim enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_SPR_PUMP": {
    "desc": "Sprayer pump pin",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "SIM_SPR_SPIN": {
    "desc": "Sprayer spinner servo pin",
    "range": "0 - 15",
    "default": "0",
    "unit": ""
  },
  "SIM_TA_ENABLE": {
    "desc": "ToneAlarm enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_TETH_ENABLE": {
    "desc": "Tether Simulation Enable/Disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_TETH_DENSITY": {
    "desc": "Tether Wire Density",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "SIM_TETH_LINELEN": {
    "desc": "Tether Maximum Line Length",
    "range": "0 - 100",
    "default": "0",
    "unit": "m"
  },
  "SIM_TETH_SYSID": {
    "desc": "Tether Simulation MAVLink System ID",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "SIM_TETH_STUCK": {
    "desc": "Tether Stuck Enable/Disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_TETH_SPGCNST": {
    "desc": "Tether Spring Constant",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "SIM_TETH_DMPCNST": {
    "desc": "Tether Damping Constant",
    "range": "0 - 255",
    "default": "0",
    "unit": ""
  },
  "SIM_VICON_POS_X": {
    "desc": "SITL vicon position on vehicle in Forward direction",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "SIM_VICON_POS_Y": {
    "desc": "SITL vicon position on vehicle in Right direction",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "SIM_VICON_POS_Z": {
    "desc": "SITL vicon position on vehicle in Down direction",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "SIM_VICON_GLIT_X": {
    "desc": "SITL vicon position glitch North",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_VICON_GLIT_Y": {
    "desc": "SITL vicon position glitch East",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_VICON_GLIT_Z": {
    "desc": "SITL vicon position glitch Down",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_VICON_FAIL": {
    "desc": "SITL vicon failure",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VICON_YAW": {
    "desc": "SITL vicon yaw angle in earth frame",
    "range": "0 - 360",
    "default": "0",
    "unit": "deg"
  },
  "SIM_VICON_YAWERR": {
    "desc": "SITL vicon yaw error",
    "range": "-180 - 180",
    "default": "0",
    "unit": "deg"
  },
  "SIM_VICON_TMASK": {
    "desc": "SITL vicon type mask [Bitmask: 0:VISION_POSITION_ESTIMATE, 1:VISION_SPEED_ESTIMATE, 2:VICON_POSITION_ESTIMATE, 3:VISION_POSITION_DELTA, 4:ODOMETRY]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VICON_VGLI_X": {
    "desc": "SITL vicon velocity glitch North",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_VICON_VGLI_Y": {
    "desc": "SITL vicon velocity glitch East",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_VICON_VGLI_Z": {
    "desc": "SITL vicon velocity glitch Down",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_VICON_P_SD": {
    "desc": "SITL vicon position standard deviation for gaussian noise",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "SIM_VICON_V_SD": {
    "desc": "SITL vicon velocity standard deviation for gaussian noise",
    "range": "N/A",
    "default": "0",
    "unit": "m/s"
  },
  "SIM_VICON_RATE": {
    "desc": "SITL vicon rate",
    "range": "N/A",
    "default": "0",
    "unit": "Hz"
  },
  "SIM_VOLZ_ENA": {
    "desc": "Volz simulator enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VOLZ_MASK": {
    "desc": "Volz override mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SIM_VOLZ_FMASK": {
    "desc": "Volz fail mask",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SPRAY_ENABLE": {
    "desc": "Sprayer enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "SPRAY_PUMP_RATE": {
    "desc": "Pump speed",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "SPRAY_SPINNER": {
    "desc": "Spinner rotation speed",
    "range": "1000 - 2000",
    "default": "0",
    "unit": "ms"
  },
  "SPRAY_SPEED_MIN": {
    "desc": "Speed minimum",
    "range": "0 - 1000",
    "default": "0",
    "unit": "cm/s"
  },
  "SPRAY_PUMP_MIN": {
    "desc": "Pump speed minimum",
    "range": "0 - 100",
    "default": "0",
    "unit": "%"
  },
  "SRTL_ACCURACY": {
    "desc": "SmartRTL accuracy",
    "range": "0 - 10",
    "default": "0",
    "unit": "m"
  },
  "SRTL_POINTS": {
    "desc": "SmartRTL maximum number of points on path",
    "range": "0 - 500",
    "default": "0",
    "unit": ""
  },
  "SRTL_OPTIONS": {
    "desc": "SmartRTL options [Bitmask: 2:Ignore pilot yaw]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "STAT_BOOTCNT": {
    "desc": "Boot Count",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "STAT_FLTTIME": {
    "desc": "Total FlightTime",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "STAT_RUNTIME": {
    "desc": "Total RunTime",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "STAT_RESET": {
    "desc": "Statistics Reset Time",
    "range": "N/A",
    "default": "0",
    "unit": "s"
  },
  "STAT_FLTCNT": {
    "desc": "Total Flight Count",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "STAT_DISTFLWN": {
    "desc": "Total Distance Flown",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TCAL_ENABLED": {
    "desc": "Temperature calibration enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TCAL_TEMP_MIN": {
    "desc": "Temperature calibration min learned temperature",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "TCAL_TEMP_MAX": {
    "desc": "Temperature calibration max learned temperature",
    "range": "N/A",
    "default": "0",
    "unit": "degC"
  },
  "TCAL_BARO_EXP": {
    "desc": "Temperature Calibration barometer exponent",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP_LOG": {
    "desc": "Logging",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP1_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP1_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP1_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP1_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP1_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP2_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP2_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP2_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP2_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP2_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP3_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP3_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP3_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP3_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP3_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP4_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP4_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP4_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP4_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP4_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP5_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP5_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP5_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP5_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP5_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP6_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP6_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP6_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP6_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP6_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP7_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP7_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP7_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP7_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP7_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP8_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP8_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP8_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP8_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP8_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP9_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP9_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP9_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP9_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP9_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP10_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP10_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP10_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP10_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP10_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP11_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP11_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP11_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP11_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP11_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP12_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP12_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP12_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP12_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP12_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP13_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP13_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP13_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP13_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP13_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP14_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP14_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP14_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP14_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP14_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_TYPE": {
    "desc": "Temperature Sensor Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_BUS": {
    "desc": "Temperature sensor bus",
    "range": "0 - 3",
    "default": "0",
    "unit": ""
  },
  "TEMP15_ADDR": {
    "desc": "Temperature sensor address",
    "range": "0 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP15_SRC": {
    "desc": "Sensor Source",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_SRC_ID": {
    "desc": "Sensor Source Identification",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_PIN": {
    "desc": "Temperature sensor analog voltage sensing pin",
    "range": "-1 - 127",
    "default": "0",
    "unit": ""
  },
  "TEMP15_A0": {
    "desc": "Temperature sensor analog 0th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_A1": {
    "desc": "Temperature sensor analog 1st polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_A2": {
    "desc": "Temperature sensor analog 2nd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_A3": {
    "desc": "Temperature sensor analog 3rd polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_A4": {
    "desc": "Temperature sensor analog 4th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_A5": {
    "desc": "Temperature sensor analog 5th polynomial coefficient",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_MSG_ID": {
    "desc": "Temperature sensor DroneCAN message ID",
    "range": "0 - 65535",
    "default": "0",
    "unit": ""
  },
  "TEMP15_RTD_NOM": {
    "desc": "Nominal RTD resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TEMP15_RTD_REF": {
    "desc": "RTD reference resistance",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TERRAIN_ENABLE": {
    "desc": "Terrain data enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TERRAIN_SPACING": {
    "desc": "Terrain grid spacing",
    "range": "N/A",
    "default": "0",
    "unit": "m"
  },
  "TERRAIN_OPTIONS": {
    "desc": "Terrain options [Bitmask: 0:Disable Download,1:Disable Disk]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TERRAIN_MARGIN": {
    "desc": "Acceptance margin",
    "range": "0.05 - 50000",
    "default": "0",
    "unit": "m"
  },
  "TERRAIN_OFS_MAX": {
    "desc": "Terrain reference offset maximum",
    "range": "0 - 50",
    "default": "0",
    "unit": "m"
  },
  "TERRAIN_CACHE_SZ": {
    "desc": "Terrain cache size",
    "range": "0 - 128",
    "default": "0",
    "unit": ""
  },
  "TMODE_ENABLE": {
    "desc": "tmode enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_MODE1": {
    "desc": "Tmode first mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_MODE2": {
    "desc": "Tmode second mode",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_ACTION1": {
    "desc": "Tmode action 1",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_ACTION2": {
    "desc": "Tmode action 2",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_ACTION3": {
    "desc": "Tmode action 3",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_ACTION4": {
    "desc": "Tmode action 4",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_ACTION5": {
    "desc": "Tmode action 5",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_ACTION6": {
    "desc": "Tmode action 6",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_LEFT": {
    "desc": "Tmode left action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_LEFT_LONG": {
    "desc": "Tmode left long action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_TRIM_AUTO": {
    "desc": "Stick auto trim limit",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "TMODE_RIGHT": {
    "desc": "Tmode right action",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_FLAGS": {
    "desc": "Tmode flags [Bitmask: 0:DisarmOnLowThrottle,1:ArmOnHighThrottle,2:UpgradeToLoiter,3:RTLStickCancel]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "TMODE_VMIN": {
    "desc": "Min voltage for output limiting",
    "range": "0 - 5",
    "default": "0",
    "unit": ""
  },
  "TMODE_VMAX": {
    "desc": "Max voltage for output limiting",
    "range": "0 - 5",
    "default": "0",
    "unit": ""
  },
  "TMODE_TMIN": {
    "desc": "Min thrust multiplier",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "TMODE_TMAX": {
    "desc": "Max thrust multiplier",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "TMODE_LOAD_MUL": {
    "desc": "Load test multiplier",
    "range": "0 - 1",
    "default": "0",
    "unit": ""
  },
  "TMODE_LOAD_FILT": {
    "desc": "Load test filter",
    "range": "0 - 100",
    "default": "0",
    "unit": ""
  },
  "TMODE_LOAD_TYPE": {
    "desc": "Load test type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VISO_TYPE": {
    "desc": "Visual odometry camera connection type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VISO_POS_X": {
    "desc": "Visual odometry camera X position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "VISO_POS_Y": {
    "desc": "Visual odometry camera Y position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "VISO_POS_Z": {
    "desc": "Visual odometry camera Z position offset",
    "range": "-5 - 5",
    "default": "0",
    "unit": "m"
  },
  "VISO_ORIENT": {
    "desc": "Visual odometery camera orientation",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VISO_SCALE": {
    "desc": "Visual odometry scaling factor",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VISO_DELAY_MS": {
    "desc": "Visual odometry sensor delay",
    "range": "0 - 250",
    "default": "0",
    "unit": "ms"
  },
  "VISO_VEL_M_NSE": {
    "desc": "Visual odometry velocity measurement noise",
    "range": "0.05 - 5.0",
    "default": "0",
    "unit": "m/s"
  },
  "VISO_POS_M_NSE": {
    "desc": "Visual odometry position measurement noise",
    "range": "0.1 - 10.0",
    "default": "0",
    "unit": "m"
  },
  "VISO_YAW_M_NSE": {
    "desc": "Visual odometry yaw measurement noise",
    "range": "0.05 - 1.0",
    "default": "0",
    "unit": "rad"
  },
  "VISO_QUAL_MIN": {
    "desc": "Visual odometry minimum quality",
    "range": "-1 - 100",
    "default": "0",
    "unit": "%"
  },
  "VTX_ENABLE": {
    "desc": "Is the Video Transmitter enabled or not",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VTX_POWER": {
    "desc": "Video Transmitter Power Level",
    "range": "1 - 1000",
    "default": "0",
    "unit": ""
  },
  "VTX_CHANNEL": {
    "desc": "Video Transmitter Channel",
    "range": "0 - 7",
    "default": "0",
    "unit": ""
  },
  "VTX_BAND": {
    "desc": "Video Transmitter Band",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VTX_FREQ": {
    "desc": "Video Transmitter Frequency",
    "range": "1000 - 6000",
    "default": "0",
    "unit": ""
  },
  "VTX_OPTIONS": {
    "desc": "Video Transmitter Options [Bitmask: 0:Pitmode,1:Pitmode until armed,2:Pitmode when disarmed,3:Unlocked,4:Add leading zero byte to requests,5:Use 1 stop-bit in SmartAudio,6:Ignore CRC in SmartAudio,7:Ignore status updates in CRSF and blindly set VTX options]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "VTX_MAX_POWER": {
    "desc": "Video Transmitter Max Power Level",
    "range": "25 - 1000",
    "default": "0",
    "unit": ""
  },
  "WINCH_TYPE": {
    "desc": "Winch Type",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WINCH_RATE_MAX": {
    "desc": "Winch deploy or retract rate maximum",
    "range": "0 - 10",
    "default": "0",
    "unit": "m/s"
  },
  "WINCH_POS_P": {
    "desc": "Winch control position error P gain",
    "range": "0.01 - 10.0",
    "default": "0",
    "unit": ""
  },
  "WINCH_OPTIONS": {
    "desc": "Winch options [Bitmask: 0:Spin freely on startup, 1:Verbose output, 2:Retry if stuck (Daiwa only)]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WPNAV_SPEED": {
    "desc": "Waypoint Horizontal Speed Target",
    "range": "10 - 2000",
    "default": "0",
    "unit": "cm/s"
  },
  "WPNAV_RADIUS": {
    "desc": "Waypoint Radius",
    "range": "5 - 1000",
    "default": "0",
    "unit": "cm"
  },
  "WPNAV_SPEED_UP": {
    "desc": "Waypoint Climb Speed Target",
    "range": "10 - 1000",
    "default": "0",
    "unit": "cm/s"
  },
  "WPNAV_SPEED_DN": {
    "desc": "Waypoint Descent Speed Target",
    "range": "10 - 500",
    "default": "0",
    "unit": "cm/s"
  },
  "WPNAV_ACCEL": {
    "desc": "Waypoint Acceleration",
    "range": "50 - 500",
    "default": "0",
    "unit": "cm/s/s"
  },
  "WPNAV_ACCEL_Z": {
    "desc": "Waypoint Vertical Acceleration",
    "range": "50 - 500",
    "default": "0",
    "unit": "cm/s/s"
  },
  "WPNAV_RFND_USE": {
    "desc": "Waypoint missions use rangefinder for terrain following",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WPNAV_JERK": {
    "desc": "Waypoint Jerk",
    "range": "1 - 20",
    "default": "0",
    "unit": "m/s/s/s"
  },
  "WPNAV_TER_MARGIN": {
    "desc": "Waypoint Terrain following altitude margin",
    "range": "0.1 - 100",
    "default": "0",
    "unit": "m"
  },
  "WPNAV_ACCEL_C": {
    "desc": "Waypoint Cornering Acceleration",
    "range": "0 - 500",
    "default": "0",
    "unit": "cm/s/s"
  },
  "WVANE_ENABLE": {
    "desc": "Enable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WVANE_GAIN": {
    "desc": "Weathervaning gain",
    "range": "0.5 - 4",
    "default": "0",
    "unit": ""
  },
  "WVANE_ANG_MIN": {
    "desc": "Weathervaning min angle",
    "range": "0 - 10",
    "default": "0",
    "unit": "deg"
  },
  "WVANE_HGT_MIN": {
    "desc": "Weathervaning min height",
    "range": "0 - 50",
    "default": "0",
    "unit": "m"
  },
  "WVANE_SPD_MAX": {
    "desc": "Weathervaning max ground speed",
    "range": "0 - 50",
    "default": "0",
    "unit": "m/s"
  },
  "WVANE_VELZ_MAX": {
    "desc": "Weathervaning max vertical speed",
    "range": "0 - 5",
    "default": "0",
    "unit": "m/s"
  },
  "WVANE_TAKEOFF": {
    "desc": "Takeoff override",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WVANE_LAND": {
    "desc": "Landing override",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "WVANE_OPTIONS": {
    "desc": "Weathervaning options [Bitmask: 0:Use pitch when nose or tail-in for faster weathervaning]",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ZIGZ_AUTO_ENABLE": {
    "desc": "ZigZag auto enable/disable",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ZIGZ_SPRAYER": {
    "desc": "Auto sprayer in ZigZag",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ZIGZ_WP_DELAY": {
    "desc": "The delay for zigzag waypoint",
    "range": "0 - 127",
    "default": "0",
    "unit": "s"
  },
  "ZIGZ_SIDE_DIST": {
    "desc": "Sideways distance in ZigZag auto",
    "range": "0.1 - 100",
    "default": "0",
    "unit": "m"
  },
  "ZIGZ_DIRECTION": {
    "desc": "Sideways direction in ZigZag auto",
    "range": "N/A",
    "default": "0",
    "unit": ""
  },
  "ZIGZ_LINE_NUM": {
    "desc": "Total number of lines",
    "range": "-1 - 32767",
    "default": "0",
    "unit": ""
  }
};

export const getParamDef = (id) => {
  if (!id) return { desc: "", range: "", default: "", unit: "" };
  const upperId = id.toUpperCase();

  // Exact Match (Now works because prefixes are gone)
  if (PARAM_DEFINITIONS[upperId]) return PARAM_DEFINITIONS[upperId];

  if (upperId.startsWith("RC") && upperId.includes("_")) {
     return { desc: "RC Channel Setting", range: "800 - 2200", default: "1500", unit: "us" };
  }

  return { desc: "Standard Parameter", range: "N/A", default: "N/A", unit: "" };
};
